from setuptools import setup, find_packages

setup(
    name='ImageSplit',
    version='0.1',
    description='Utility for splitting large image files into slices or chunks',
    url='https://github.com/gift-surg/ImageSplit',
    author='Tom Doel',
    author_email='t.doel@ucl.ac.uk',
    license='BSD license',

    packages=find_packages(
        exclude=[
            'doc',
            'tests',
        ]
    )
)
