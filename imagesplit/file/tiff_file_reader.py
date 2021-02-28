# coding=utf-8

"""Read and write data to TIFF files"""
import os
import numpy as np
from PIL import Image, TiffImagePlugin

from imagesplit.file.data_type import DataType
from imagesplit.file.file_image_descriptor import FileImageDescriptor
from imagesplit.file.image_file_reader import BlockImageFileReader


class TiffFileReader(BlockImageFileReader):
    """Read and write to TIFF files"""

    def __init__(self, filename, image_size, data_type):
        super(TiffFileReader, self).__init__(image_size, data_type)    # pylint: disable=super-with-arguments
        self.cached_image = None
        self.filename = filename

    def close_file(self):
        """Closes file if required"""

    def close(self):
        """Closes file if required"""

    def load(self):
        """Load image data from TIFF file"""
        if self.cached_image is None:
            img = Image.open(self.filename)
            if self.data_type.is_rgb:
                print("Warning: ImageSplit currently does not support RGB "
                      "input. Converting to grayscale.")
                img = img.convert('L')
            self.cached_image = np.array(img)
        return self.cached_image

    def save(self, image):
        """Save out image data into TIFF file"""
        compression = self.data_type.compression

        if compression == 'default':
            compression = 'tiff_adobe_deflate'

        if compression not in [None,
                               'packbits',
                               'tiff_deflate',
                               'tiff_adobe_deflate',
                               'tiff_sgilog23',
                               'tiff_raw16']:
            raise ValueError(
                compression + ' compression not supported for TIFF files')

        img = Image.fromarray(image)

        if compression:
            # Set WRITE_LIBTIFF to true for compression, but restore previous
            # value afterwards in case user has deliberately set a value
            write_libtiff_previous_value = TiffImagePlugin.WRITE_LIBTIFF
            try:
                TiffImagePlugin.WRITE_LIBTIFF = True
                img.save(self.filename, compression=compression)

            finally:
                TiffImagePlugin.WRITE_LIBTIFF = write_libtiff_previous_value

        else:
            img.save(self.filename)

    @staticmethod
    # pylint: disable=unused-argument
    def create_write_file(subimage_descriptor, file_handle_factory):
        """Create a TiffFileReader class for this filename and template"""
        filename = subimage_descriptor.filename
        local_file_size = subimage_descriptor.get_local_size()
        byte_order_msb = subimage_descriptor.msb
        compression = subimage_descriptor.compression
        data_type = DataType(subimage_descriptor.data_type,
                             byte_order_msb=byte_order_msb,
                             compression=compression)
        return TiffFileReader(filename, local_file_size, data_type)

    @staticmethod
    def add_filename_suffix(filename, suffix):
        """Adds a suffix to to the filename before the extension"""
        name, ext = os.path.splitext(filename)
        return "{name}_{suffix}{ext}".format(name=name, suffix=suffix, ext=ext)

    @classmethod
    def load_and_parse_header(cls, filename):
        """Reads a TIFF header file and parses"""

        img = Image.open(filename)
        descriptor = parse_tiff(img)
        img.close()
        return descriptor

    @classmethod
    def create_read_file(cls, subimage_descriptor, file_handle_factory):  # pylint:disable=unused-argument
        """Create a TIFF class for file access"""

        filename = subimage_descriptor.filename
        local_file_size = subimage_descriptor.get_local_size()
        byte_order_msb = subimage_descriptor.msb
        compression = subimage_descriptor.compression
        data_type = DataType(subimage_descriptor.data_type,
                             byte_order_msb=byte_order_msb,
                             compression=compression)
        return cls(filename=filename, image_size=local_file_size,
                   data_type=data_type)


def parse_tiff(image):
    """Read a metaheader and returns a FileImageDescriptor"""

    file_format = "tiff"
    dim_order = [1, 2, 3]
    data_type = DataType.name_from_tiff(image.mode)
    image_size = [image.height, image.width, 1]
    msb = True
    compression = image.info["compression"]
    dpi = image.info['dpi']
    voxel_size = [25.4/dpi[1], 25.4/dpi[0], 25.4/dpi[0]]
    header = {}
    return (FileImageDescriptor(file_format=file_format,
                                dim_order=dim_order,
                                data_type=data_type,
                                image_size=image_size,
                                msb=msb,
                                compression=compression,
                                voxel_size=voxel_size), header)
