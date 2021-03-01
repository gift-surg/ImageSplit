Search.setIndex({docnames:["imagesplit","imagesplit.applications","imagesplit.applications.split_files","imagesplit.applications.write_files","imagesplit.file","imagesplit.file.data_type","imagesplit.file.file_factory","imagesplit.file.file_formats","imagesplit.file.file_image_descriptor","imagesplit.file.file_wrapper","imagesplit.file.format_factory","imagesplit.file.image_file_reader","imagesplit.file.metaio_reader","imagesplit.file.tiff_file_reader","imagesplit.file.vol_reader","imagesplit.image","imagesplit.image.combined_image","imagesplit.image.image_wrapper","imagesplit.utils","imagesplit.utils.file_descriptor","imagesplit.utils.json_reader","imagesplit.utils.utilities","imagesplit.utils.versioneer_version","imagesplit.utils.versioning","index","modules","versioneer"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["imagesplit.rst","imagesplit.applications.rst","imagesplit.applications.split_files.rst","imagesplit.applications.write_files.rst","imagesplit.file.rst","imagesplit.file.data_type.rst","imagesplit.file.file_factory.rst","imagesplit.file.file_formats.rst","imagesplit.file.file_image_descriptor.rst","imagesplit.file.file_wrapper.rst","imagesplit.file.format_factory.rst","imagesplit.file.image_file_reader.rst","imagesplit.file.metaio_reader.rst","imagesplit.file.tiff_file_reader.rst","imagesplit.file.vol_reader.rst","imagesplit.image.rst","imagesplit.image.combined_image.rst","imagesplit.image.image_wrapper.rst","imagesplit.utils.rst","imagesplit.utils.file_descriptor.rst","imagesplit.utils.json_reader.rst","imagesplit.utils.utilities.rst","imagesplit.utils.versioneer_version.rst","imagesplit.utils.versioning.rst","index.rst","modules.rst","versioneer.rst"],objects:{"":{imagesplit:[0,0,0,"-"],utils:[0,0,0,"-"],versioneer:[26,0,0,"-"]},"imagesplit.applications":{split_files:[2,0,0,"-"],write_files:[3,0,0,"-"]},"imagesplit.applications.split_files":{main:[2,1,1,""],parse_slice_output:[2,1,1,""],specify_input_descriptors:[2,1,1,""],specify_output_descriptors:[2,1,1,""],split_file:[2,1,1,""]},"imagesplit.applications.write_files":{write_files:[3,1,1,""]},"imagesplit.file":{data_type:[5,0,0,"-"],file_factory:[6,0,0,"-"],file_formats:[7,0,0,"-"],file_image_descriptor:[8,0,0,"-"],file_wrapper:[9,0,0,"-"],format_factory:[10,0,0,"-"],image_file_reader:[11,0,0,"-"],metaio_reader:[12,0,0,"-"],tiff_file_reader:[13,0,0,"-"],vol_reader:[14,0,0,"-"]},"imagesplit.file.data_type":{DataType:[5,2,1,""],DataTypeTemplate:[5,2,1,""]},"imagesplit.file.data_type.DataType":{CHAR_TYPE:[5,3,1,""],DOUBLE_TYPE:[5,3,1,""],FLOAT_TYPE:[5,3,1,""],LONG_LONG_TYPE:[5,3,1,""],LONG_TYPE:[5,3,1,""],RGB_TYPE:[5,3,1,""],SHORT_TYPE:[5,3,1,""],UCHAR_TYPE:[5,3,1,""],ULONG_LONG_TYPE:[5,3,1,""],ULONG_TYPE:[5,3,1,""],USHORT_TYPE:[5,3,1,""],from_metaio:[5,4,1,""],from_tiff:[5,4,1,""],from_vge:[5,4,1,""],get_is_imagej:[5,4,1,""],get_is_rgb:[5,4,1,""],get_numpy_format:[5,4,1,""],metaio_from_name:[5,4,1,""],name_from_metaio:[5,4,1,""],name_from_tiff:[5,4,1,""],name_from_vge:[5,4,1,""],types:[5,3,1,""]},"imagesplit.file.file_factory":{FileFactory:[6,2,1,""]},"imagesplit.file.file_factory.FileFactory":{create_read_file:[6,4,1,""],create_write_file:[6,4,1,""]},"imagesplit.file.file_formats":{FileFormats:[7,2,1,""]},"imagesplit.file.file_formats.FileFormats":{METAIO_FORMAT:[7,3,1,""],TIFF_FORMAT:[7,3,1,""],VOL_FORMAT:[7,3,1,""]},"imagesplit.file.file_image_descriptor":{FileImageDescriptor:[8,2,1,""]},"imagesplit.file.file_wrapper":{FileHandleFactory:[9,2,1,""],FileStreamer:[9,2,1,""],FileWrapper:[9,2,1,""]},"imagesplit.file.file_wrapper.FileHandleFactory":{create_file_handle:[9,4,1,""]},"imagesplit.file.file_wrapper.FileStreamer":{close:[9,4,1,""],read_line:[9,4,1,""],write_line:[9,4,1,""]},"imagesplit.file.file_wrapper.FileWrapper":{close:[9,4,1,""],get_handle:[9,4,1,""],open:[9,4,1,""]},"imagesplit.file.format_factory":{FormatFactory:[10,2,1,""]},"imagesplit.file.format_factory.FormatFactory":{extension_to_format:[10,4,1,""],get_extension_for_format:[10,4,1,""],get_factory:[10,4,1,""],simplify_format:[10,4,1,""]},"imagesplit.file.image_file_reader":{BlockImageFileReader:[11,2,1,""],ImageFileReader:[11,2,1,""],LinearImageFileReader:[11,2,1,""]},"imagesplit.file.image_file_reader.BlockImageFileReader":{close_file:[11,4,1,""],load:[11,4,1,""],read_image:[11,4,1,""],save:[11,4,1,""],write_image:[11,4,1,""]},"imagesplit.file.image_file_reader.ImageFileReader":{write_image:[11,4,1,""]},"imagesplit.file.image_file_reader.LinearImageFileReader":{close_file:[11,4,1,""],read_image:[11,4,1,""],read_line:[11,4,1,""],write_image:[11,4,1,""],write_line:[11,4,1,""]},"imagesplit.file.metaio_reader":{MetaIoFile:[12,2,1,""],anatomical_to_cosine:[12,1,1,""],anatomical_to_permutation:[12,1,1,""],condensed_to_cosine:[12,1,1,""],dimensions_from_orientations:[12,1,1,""],get_condensed_dim_order:[12,1,1,""],get_default_metadata:[12,1,1,""],get_flip_from_orientations:[12,1,1,""],load_mhd_header:[12,1,1,""],mhd_cosines_to_permutation:[12,1,1,""],parse_mhd:[12,1,1,""],permutation_from_orientations:[12,1,1,""],permutation_to_cosine:[12,1,1,""],save_mhd_header:[12,1,1,""]},"imagesplit.file.metaio_reader.MetaIoFile":{close:[12,4,1,""],close_file:[12,4,1,""],create_read_file:[12,4,1,""],create_write_file:[12,4,1,""],get_bytes_per_voxel:[12,4,1,""],get_dimension_ordering:[12,4,1,""],load_and_parse_header:[12,4,1,""],read_line:[12,4,1,""],write_line:[12,4,1,""]},"imagesplit.file.tiff_file_reader":{TiffFileReader:[13,2,1,""],parse_tiff:[13,1,1,""]},"imagesplit.file.tiff_file_reader.TiffFileReader":{add_filename_suffix:[13,4,1,""],close:[13,4,1,""],close_file:[13,4,1,""],create_read_file:[13,4,1,""],create_write_file:[13,4,1,""],load:[13,4,1,""],load_and_parse_header:[13,4,1,""],save:[13,4,1,""]},"imagesplit.file.vol_reader":{VolFile:[14,2,1,""],compute_bytes_per_voxel:[14,1,1,""],dim_order_from_header:[14,1,1,""],get_numpy_datatype:[14,1,1,""],load_vge_header:[14,1,1,""],parse_vge:[14,1,1,""]},"imagesplit.file.vol_reader.VolFile":{close:[14,4,1,""],close_file:[14,4,1,""],create_read_file:[14,4,1,""],get_bytes_per_voxel:[14,4,1,""],get_dimension_ordering:[14,4,1,""],load_and_parse_header:[14,4,1,""],read_line:[14,4,1,""],write_line:[14,4,1,""]},"imagesplit.image":{combined_image:[16,0,0,"-"],image_wrapper:[17,0,0,"-"]},"imagesplit.image.combined_image":{Axis:[16,2,1,""],CombinedImage:[16,2,1,""],CoordinateTransformer:[16,2,1,""],Limits:[16,2,1,""],LocalSource:[16,2,1,""],Source:[16,2,1,""],SubImage:[16,2,1,""]},"imagesplit.image.combined_image.Axis":{from_condensed_format:[16,4,1,""],to_condensed_format:[16,4,1,""]},"imagesplit.image.combined_image.CombinedImage":{close:[16,4,1,""],get_limits:[16,4,1,""],read_image:[16,4,1,""],write_image:[16,4,1,""]},"imagesplit.image.combined_image.CoordinateTransformer":{image_to_global:[16,4,1,""],image_to_local:[16,4,1,""],image_to_other:[16,4,1,""],to_global:[16,4,1,""],to_local:[16,4,1,""],to_other:[16,4,1,""]},"imagesplit.image.combined_image.LocalSource":{close:[16,4,1,""],read_image:[16,4,1,""]},"imagesplit.image.combined_image.Source":{close:[16,4,1,""],read_image:[16,4,1,""]},"imagesplit.image.combined_image.SubImage":{bind_by_roi:[16,4,1,""],close:[16,4,1,""],get_limits:[16,4,1,""],read_image:[16,4,1,""],read_image_bound_by_roi:[16,4,1,""],write_image:[16,4,1,""]},"imagesplit.image.image_wrapper":{ImageStorage:[17,2,1,""],ImageWrapper:[17,2,1,""],ImageWrapperBase:[17,2,1,""],SmartImage:[17,2,1,""]},"imagesplit.image.image_wrapper.ImageStorage":{copy:[17,4,1,""],create_empty:[17,4,1,""],flip:[17,4,1,""],from_raw_image:[17,4,1,""],get:[17,4,1,""],get_image:[17,4,1,""],get_raw:[17,4,1,""],get_raw_image:[17,4,1,""],get_size:[17,4,1,""],get_type:[17,4,1,""],reshape:[17,4,1,""],set:[17,4,1,""],transpose:[17,4,1,""]},"imagesplit.image.image_wrapper.ImageWrapper":{get_sub_image:[17,4,1,""],transform_coords:[17,4,1,""],transform_sub_image:[17,4,1,""]},"imagesplit.image.image_wrapper.ImageWrapperBase":{set_sub_image:[17,4,1,""],transform_coords:[17,4,1,""],transform_sub_image:[17,4,1,""]},"imagesplit.image.image_wrapper.SmartImage":{coords_to_other:[17,4,1,""],transform_coords:[17,4,1,""],transform_sub_image:[17,4,1,""],transform_to_other:[17,4,1,""]},"imagesplit.utils":{file_descriptor:[19,0,0,"-"],json_reader:[20,0,0,"-"],utilities:[21,0,0,"-"],versioneer_version:[22,0,0,"-"],versioning:[23,0,0,"-"]},"imagesplit.utils.file_descriptor":{GlobalImageDescriptor:[19,2,1,""],SubImageDescriptor:[19,2,1,""],SubImageRanges:[19,2,1,""],convert_to_descriptors:[19,1,1,""],convert_to_dict:[19,1,1,""],generate_input_descriptors:[19,1,1,""],generate_output_descriptors:[19,1,1,""],header_from_descriptor:[19,1,1,""],load_descriptor:[19,1,1,""],parse_header:[19,1,1,""],write_descriptor_file:[19,1,1,""]},"imagesplit.utils.file_descriptor.SubImageDescriptor":{from_dict:[19,4,1,""],get_local_origin:[19,4,1,""],get_local_size:[19,4,1,""],get_local_voxel_size:[19,4,1,""],to_dict:[19,4,1,""]},"imagesplit.utils.json_reader":{read_json:[20,1,1,""],write_json:[20,1,1,""]},"imagesplit.utils.utilities":{compute_bytes_per_voxel:[21,1,1,""],convert_to_array:[21,1,1,""],file_linear_byte_offset:[21,1,1,""],get_block_coordinate_range:[21,1,1,""],get_number_of_blocks:[21,1,1,""],get_numpy_datatype:[21,1,1,""],get_suggested_block_size:[21,1,1,""],ranges_for_max_block_size:[21,1,1,""],ranges_for_number_of_blocks:[21,1,1,""],rescale_image:[21,1,1,""],to_rgb:[21,1,1,""]},"imagesplit.utils.versioneer_version":{NotThisMethod:[22,5,1,""],VersioneerConfig:[22,2,1,""],get_config:[22,1,1,""],get_keywords:[22,1,1,""],get_versions:[22,1,1,""],git_get_keywords:[22,1,1,""],git_pieces_from_vcs:[22,1,1,""],git_versions_from_keywords:[22,1,1,""],plus_or_dot:[22,1,1,""],register_vcs_handler:[22,1,1,""],render:[22,1,1,""],render_git_describe:[22,1,1,""],render_git_describe_long:[22,1,1,""],render_pep440:[22,1,1,""],render_pep440_old:[22,1,1,""],render_pep440_post:[22,1,1,""],render_pep440_pre:[22,1,1,""],run_command:[22,1,1,""],versions_from_parentdir:[22,1,1,""]},"imagesplit.utils.versioning":{get_version:[23,1,1,""],get_version_string:[23,1,1,""],version_from_pip:[23,1,1,""],version_from_versioneer:[23,1,1,""]},imagesplit:{applications:[1,0,0,"-"],file:[4,0,0,"-"],image:[15,0,0,"-"],utils:[18,0,0,"-"]},versioneer:{NotThisMethod:[26,5,1,""],VersioneerBadRootError:[26,5,1,""],VersioneerConfig:[26,2,1,""],do_setup:[26,1,1,""],do_vcs_install:[26,1,1,""],get_cmdclass:[26,1,1,""],get_config_from_root:[26,1,1,""],get_root:[26,1,1,""],get_version:[26,1,1,""],get_versions:[26,1,1,""],git_get_keywords:[26,1,1,""],git_pieces_from_vcs:[26,1,1,""],git_versions_from_keywords:[26,1,1,""],plus_or_dot:[26,1,1,""],register_vcs_handler:[26,1,1,""],render:[26,1,1,""],render_git_describe:[26,1,1,""],render_git_describe_long:[26,1,1,""],render_pep440:[26,1,1,""],render_pep440_old:[26,1,1,""],render_pep440_post:[26,1,1,""],render_pep440_pre:[26,1,1,""],run_command:[26,1,1,""],scan_setup_py:[26,1,1,""],versions_from_file:[26,1,1,""],versions_from_parentdir:[26,1,1,""],write_to_version_file:[26,1,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:exception"},terms:{"1076c97":26,"1076c978a8d3cfc70f408fe5974aa6c092c949ac":26,"2017":[2,3,5,7,8,9,10,12,14,19,20,21,23],"2018":24,"3176":26,"350":24,"3615":26,"574ab98":26,"8601":26,"abstract":[9,11,16,17],"boolean":26,"byte":[11,12,14,21,26],"case":26,"char":[5,24],"class":[5,6,7,8,9,10,11,12,13,14,15,16,17,19,22,26],"default":[12,22,24,26],"export":26,"final":21,"float":5,"function":[15,18,22,23,26],"import":26,"long":[5,22,26],"new":[17,26],"public":26,"return":[5,9,10,12,13,14,16,17,21,22,23,26],"short":[5,22,26],"static":[9,13,14,16,19,26],"throw":[23,26],"true":[5,26],"try":[22,24,26],"while":[17,26],Axes:17,For:[24,26],One:24,The:[14,22,24,25],There:[21,24],These:26,VCS:[22,26],With:26,_0001:24,__init__:26,__version__:26,_version:[22,26],abil:24,about:26,absolut:[24,26],access:[9,13],accident:24,accord:24,accur:26,across:16,actual:[17,26],adbo:24,add:[13,26],add_filename_suffix:13,added:26,adding:26,addit:26,affect:24,after:26,against:26,aggreg:16,agnost:26,all:[16,26],allow:[9,17,21,24,26],along:[2,12,14,24,26],alreadi:[12,14,22,26],also:[22,24,26],altern:26,alwai:[22,26],anatomical_orientation_char:12,anatomical_orientation_str:12,anatomical_to_cosin:12,anatomical_to_permut:12,ani:[9,16,19,26],anoth:17,anywai:[22,26],api:26,appear:[22,26],append:24,applic:[0,25,26],appropri:[22,26],arbitrari:17,arbitrarili:9,archiv:[22,26],arg:[2,22,26],argument:[24,26],arrai:[12,14,16,17,19,21],ascend:[12,14],ask:26,assembl:[16,24,26],associ:[12,14],assum:[17,21],author:[2,3,5,7,8,9,10,12,14,19,20,21,23,24],autom:26,automat:24,avail:26,avoid:26,axi:[2,12,16,24],back:24,backward:[22,26],badg:26,base:[2,5,6,7,8,9,10,11,12,13,14,16,17,19,22,23,26],basic:26,been:[9,10,22,26],befor:[13,24,26],being:[21,26],below:[24,26],between:[16,17,24,26],beyond:26,binari:[9,12,14],bind:26,bind_by_roi:16,block:[11,21],block_numb:21,block_siz:21,blockimagefileread:[11,13],border:21,both:[22,26],boundari:21,box:26,branch:26,brian:26,browser:26,bsd:24,bug:26,build:[22,26],buildbot:26,byte_order_msb:[5,21],bytes_per_voxel:[5,9,21],call:[22,26],callabl:1,can:[24,26],cannot:24,captur:26,caus:26,cc0:26,centr:24,certain:26,cfg:26,chang:[21,26],char_typ:5,check:[22,26],checkout:26,checksum:26,choos:[24,26],classmethod:[5,10,12,13,14,17],clean:[22,26],clear:26,cli:26,close:[9,11,12,13,14,16,26],close_fil:[11,12,13,14],cmic:24,code:[9,24,26],colleg:24,com:26,combin:[19,24],combined_imag:[0,15,24],combinedimag:16,come:26,command:[22,24,26],commit:26,common:26,commonli:26,compar:26,compat:26,complet:26,compliant:26,compon:26,compress:[5,8,19,24],comput:[2,24,26],compute_bytes_per_voxel:[14,21],condens:[12,16,26],condensed_format:12,condensed_to_cosin:12,config:26,configur:[22,26],conform:23,connect:26,consecut:[12,14],consist:[3,9,26],console_script:26,construct:[23,26],contain:[12,14,16,21,22,26],content:[25,26],continu:26,control:26,conveni:26,convent:17,convention:[22,26],convert:[16,17,19,21,24],convert_to_arrai:21,convert_to_descriptor:19,convert_to_dict:19,coordin:[12,14,16,17,19,21],coordinatetransform:16,coords_to_oth:17,copi:17,copyright:[2,3,5,7,8,9,10,12,14,19,20,21,23,24],coron:24,correct:26,correctli:26,correspond:[12,14,17,21,22,24,26],cosin:12,could:26,creat:[3,5,6,9,11,12,13,14,16,17,19,22,24,26],create_empti:17,create_file_handl:9,create_read_fil:[6,12,13,14],create_write_fil:[6,12,13],creativ:26,creativecommon:26,cryptograph:26,current:[21,22,24,26],custom:26,cwd:[22,26],data:[5,9,11,12,13,14,16,17,20,24,26],data_sourc:11,data_typ:[0,4,8,11,13,19,21],datatyp:[5,14,21,24],datatypetempl:5,date:26,debug:26,decor:[22,26],dedic:26,defin:[7,16],definit:7,deflat:24,del:26,depend:24,deriv:24,descend:[12,14],describ:[19,22,23,26],descript:26,descriptor:[2,16,19,24],descriptor_dict:19,descriptor_filenam:[2,19],descriptors_dict:19,descriptors_in:[3,19],descriptors_out:[3,19],design:[24,26],destin:11,detail:26,determin:[22,24,26],dev0:[22,26],devdist:[22,26],develop:[24,26],dicom:12,dict:26,dictionari:[19,26],differ:[6,16,17,24,26],dim_flip:16,dim_ord:[2,8,16,19],dim_order_and_flip:16,dim_order_condens:19,dim_order_from_head:14,dimens:[12,14,17,21,24],dimension:[17,21],dimension_1:12,dimension_2:12,dimension_3:12,dimension_ord:9,dimensions_from_orient:12,direct:[12,26],direction_cosine_1:12,direction_cosine_2:12,direction_cosine_3:12,directori:[22,26],dirti:[22,26],discuss:26,disk:[12,19],displai:26,distanc:[22,26],distinct:26,distribut:[16,26],distributionnotfound:26,distutil:26,divid:24,do_flip:17,do_setup:26,do_vcs_instal:26,doc:24,document:24,doel:[2,3,5,7,8,9,10,12,14,19,20,21,23,24],domain:26,don:[22,24,26],doubl:5,double_typ:5,dtype:17,dure:26,dynam:26,each:[12,14,21,24,26],earlier:26,easi:26,easier:26,easili:[24,26],edit:26,eexcept:[22,26],egg_info:26,either:26,element:[12,14],element_typ:[14,21],elementtyp:[14,21],els:[22,26],emb:26,embed:26,empti:17,enabl:24,endian:14,enough:26,ensur:24,entir:26,entri:[19,26],entry_point:26,entrypoint:26,env:[22,26],environ:24,epsrc:24,equal:[21,24,26],equival:26,error:[24,26],especi:24,etc:[24,26],everi:26,exact:26,exactli:26,exampl:26,exce:21,except:[22,23,26],execut:26,exist:24,exit:24,expand:[22,26],expect:26,extend:26,extens:[10,13],extension_to_format:10,extract:[22,26],factori:[5,6,10,19],fail:26,fals:[2,3,5,16,19,22,26],fatal:26,featur:26,fetch:16,file:[0,2,3,16,19,20,21,22,23,24,25,26],file_data_typ:14,file_descriptor:[0,18],file_extens:10,file_factori:[0,3,4,16],file_format:[0,4,8,10,19],file_handle_factori:[2,6,9,12,13,14],file_image_descriptor:[0,4],file_linear_byte_offset:21,file_wrapp:[0,4],filefactori:6,fileformat:7,filehandlefactori:9,fileimagedescriptor:[8,12,13,14],filenam:[9,12,13,14,19,20,24,26],filename_out_bas:[2,19],filename_overrid:[2,19],filestream:9,filewrapp:9,find:[16,26],first:[14,21,24],fit:16,fix:26,flat:26,flavor:26,flip:[12,17,24],float_typ:5,fod:6,folder:24,follow:26,form:[16,19,24],format:[4,5,7,10,12,20,24,26],format_factori:[0,4],format_nam:10,format_str:10,formatfactori:10,found:26,frequent:26,from:[3,5,8,9,11,12,13,14,16,17,19,20,22,24,26],from_condensed_format:16,from_dict:19,from_metaio:5,from_raw_imag:17,from_tiff:5,from_vg:5,full:[19,24,26],futur:26,g1076c97:26,g574ab98:26,gener:[21,24,26],generalis:8,generate_input_descriptor:19,generate_output_descriptor:19,get:[2,5,10,12,17,19,22,24,26],get_block_coordinate_rang:21,get_bytes_per_voxel:[12,14],get_cmdclass:26,get_condensed_dim_ord:12,get_config:22,get_config_from_root:26,get_default_metadata:12,get_dimension_ord:[12,14],get_extension_for_format:10,get_factori:10,get_flip_from_orient:12,get_handl:9,get_imag:17,get_is_imagej:5,get_is_rgb:5,get_keyword:22,get_limit:16,get_local_origin:19,get_local_s:19,get_local_voxel_s:19,get_number_of_block:21,get_numpy_datatyp:[14,21],get_numpy_format:5,get_raw:17,get_raw_imag:17,get_root:26,get_siz:17,get_sub_imag:17,get_suggested_block_s:21,get_typ:17,get_vers:[22,23,26],get_version_str:23,ghex:[22,26],gift:24,git:[22,23,26],git_describ:[22,26],git_get_keyword:[22,26],git_pieces_from_vc:[22,26],git_versions_from_keyword:[22,26],gitattribut:26,github:26,give:26,given:[12,14,21,22,26],global:[12,14,16,17,24],global_descriptor:2,global_imag:16,global_s:16,global_sourc:16,global_start:16,globalimagedescriptor:19,goal:[22,26],goe:26,greyscal:21,guid:24,guthub:24,handl:[6,9],handler:[22,26],happen:26,has:26,hash:[22,26],hasn:[22,26],have:[9,10,19,21,22,24,26],head:26,header:[2,5,12,13,14,19,24],header_filenam:[12,14],header_from_descriptor:19,header_templ:12,help:[24,26],here:24,hex:[22,26],hide_stderr:[22,26],homebrew:24,hopefulli:26,how:[24,26],howev:[24,26],http:26,idea:26,identifi:[22,26],imag:[0,2,3,5,7,8,9,10,11,12,13,14,19,21,24,25],image_file_read:[0,4,12,13,14],image_lin:[9,11,12,14,21],image_s:[8,9,11,13,17,19,21],image_to_glob:16,image_to_loc:16,image_to_oth:16,image_wrapp:[0,15],imagefileread:11,imagej:24,imagestorag:17,imagewrapp:17,imagewrapperbas:17,implement:[22,26],improv:26,includ:[22,26],independ:26,index:[14,17,19,24],indic:26,inform:[19,22,26],ini:[14,26],input:[2,3,6,19,24],input_data:24,input_fil:19,input_file_bas:2,insatl:24,insid:[22,26],instal:26,instead:[24,26],instruct:26,intermedi:26,investig:26,invok:26,ipi:26,is_imagej:5,is_rgb:5,iso:26,issu:26,its:26,itself:26,json:20,json_read:[0,18],just:[22,26],kei:26,keyword:[22,26],kind:16,know:26,known:26,langaug:26,larg:[2,9,21,24],larger:[16,19],later:[24,26],latest:26,learn:26,length:21,less:24,let:26,level:[22,26],librari:26,licenc:24,licens:26,like:[22,26],limit:[16,21,24,26],line:[9,11],linearimagefileread:[11,12,14],list:[19,21,26],load:[11,12,13,14,19,24],load_and_parse_head:[12,13,14],load_descriptor:19,load_mhd_head:12,load_vge_head:14,local:[16,17,19,22,24,26],local_file_s:12,local_imag:16,local_image_s:14,local_s:16,local_start:16,localsourc:16,locat:9,logic:26,london:24,long_long_typ:5,long_typ:5,longlong:5,look:[22,26],lookup:26,loss:24,low:24,maco:24,mai:[9,10,24,26],main:[2,26],make:[24,26],manag:[9,26],mani:[24,26],manifest_in:26,manual:26,map:24,mark:[22,26],marker:26,mask:24,master:26,match:24,max:24,max_block_s:21,max_block_size_voxel:[2,19],maximum:[16,21,24],mayb:26,mean:[22,24,26],medic:24,memori:[17,24],messag:24,metadata:[8,12,19],metahead:[12,13],metaio:[5,12,21,24],metaio_format:7,metaio_from_nam:5,metaio_read:[0,4],metaio_typ:5,metaio_type_nam:5,metaiofil:[12,14],method:[22,26],mha:[12,24],mhd:[7,12,24],mhd_cosines_to_permut:12,might:[17,26],min:24,minimum:[16,21,24],miss:26,mode:[9,26],modern:26,modifi:[10,24],modul:[24,25],monochrom:24,more:[3,19,24,26],most:[21,26],mostli:[24,26],msb:[8,19],multi:[17,21],multidimension:11,multipl:[5,9,10,16,24,26],must:26,myproject:26,name:[5,9,10,22,23,24,26],name_from_metaio:5,name_from_tiff:5,name_from_vg:5,necessari:[9,21,26],need:[22,24,26],neg:[12,14,24],network:26,never:23,new_shap:17,newer:26,next:[11,26],nightli:26,none:[2,5,17,22,26],normalis:24,note:[22,24,26],notthismethod:[22,26],num_dim:[19,21],num_voxel:[9,11],num_voxels_to_read:[12,14],number:[2,12,14,21,24,26],number_of_block:21,numpi:[5,14,17,21],numpy_bas:5,numpy_format:9,numpy_imag:17,object:[5,6,7,8,9,10,11,16,17,19,22,26],offset:[17,21,24],old:26,older:[22,26],omit:24,onc:26,one:[3,14,19,21,22,24,26],ones:[24,26],onli:[22,26],open:9,oper:26,optim:24,order:[12,14,17,24],ordereddict:12,org:26,orient:[12,17,24,26],orientation_1:12,orientation_2:12,orientation_3:12,orientation_vector_1:12,orientation_vector_2:12,origin:[16,17,19,24],orthogon:16,other:[24,26],other_transform:16,otherwis:26,our:[22,26],out:[11,13,16,22,24,26],out_compress:2,outer:21,output:[2,3,6,10,19,24,26],output_data:24,output_file_format:19,output_format:2,output_typ:[2,19],outsid:26,over:24,overlap:[16,21,24],overlap_s:21,overlap_size_voxel:[2,19],overrid:26,overridden:24,overwrit:24,own:26,packag:[25,26],pad:21,page:[24,26],pair:[12,14],paramat:5,paramet:[2,19,22,26],parameter_nam:21,parent:[22,26],parentdir_prefix:[22,26],pars:[12,13,14,19],parse_head:19,parse_mhd:12,parse_slice_output:2,parse_tiff:13,parse_vg:14,part:[11,16,17,19,24],partial:16,particular:[22,26],past:26,path:[9,26],pep440:[23,26],perform:24,perhap:26,permiss:24,permut:12,permutation_from_orient:12,permutation_to_cosin:12,piec:[22,26],pil:[17,24],pil_typ:5,pip2:24,pip3:24,pip:[24,26],pkg_resourc:26,place:26,pleas:24,plus_or_dot:[22,26],png:26,point:[24,26],popul:22,posit:[12,14],post:[22,26],postdist:[22,26],prefer:[12,14],prefix:[22,24,26],presenc:26,present:[24,26],prevent:24,previou:24,prior:24,prioritis:24,probabl:26,problem:26,process:[24,26],produc:[24,26],product:23,project:[22,24,26],prone:26,proper:26,provid:26,publicdomain:26,publish:24,pull:26,purpos:[24,26],py2:26,pypa:26,pypi:[24,26],pypip:26,python2:26,python:[24,26],question:26,quick:26,rais:[22,26],rang:[16,19,21,24],ranges_for_max_block_s:21,ranges_for_number_of_block:21,rapidli:21,raw:[12,14,17],read:[4,6,9,11,12,13,14,16,19,20,24,26],read_imag:[11,16],read_image_bound_by_roi:16,read_json:20,read_lin:[9,11,12,14],real:[9,16],reason:26,rebuilt:26,recent:26,recombin:24,recommend:[21,24],reconstruct:26,record:26,recreat:26,reduc:[21,26],regener:26,region:16,register_vcs_handl:[22,26],rel:24,relat:[15,19,26],releas:[22,24,26],remov:26,render:[22,26],render_git_describ:[22,26],render_git_describe_long:[22,26],render_pep440:[22,26],render_pep440_old:[22,26],render_pep440_post:[22,26],render_pep440_pr:[22,26],replac:[17,26],repo:23,report:26,repres:[12,14,19,21,24],request:[22,26],requir:[5,10,13,14,21,26],rescal:[2,3,16,21,24],rescale_imag:21,rescale_limit:[9,11,12,14,16,21],reshap:17,resolv:26,resourc:24,result:26,revis:26,revisionid:26,rewritten:[22,26],rgb:[5,21],rgb_type:5,right:26,rmax:16,rmin:16,rocket:26,roi:16,root:[22,26],roughli:[21,26],run:26,run_command:[22,26],runtim:26,safe:[23,24],same:[24,26],save:[2,11,12,13,19,24],save_mhd_head:12,scalar:[21,24],scalar_or_list:21,scan_setup_pi:26,scenario:[22,26],scheme:17,script:26,sdist:26,search:[22,24,26],section:26,see:[24,26],select:[24,26],selector:17,self:26,separ:[24,26],septemb:24,sequenc:24,set:[2,3,17,21,24,26],set_sub_imag:17,setup:26,setuptool:26,sever:26,sha1:26,share:26,short_typ:5,should:[10,24,26],shouldn:[22,26],show:24,sibl:26,side:26,signific:26,simplify_format:10,singl:[12,14,16,24],situat:26,size:[16,17,19,21],size_glob:16,size_loc:[11,16],slave:26,slice:[2,24],slice_output:2,small:26,smaller:2,smartimag:17,snapshot:26,softwar:[22,26],some:[24,26],someth:26,somewher:26,sort:[22,26],sourc:[2,3,5,6,7,8,9,10,11,12,13,14,16,17,19,20,21,22,23,24,26],special:26,specif:26,specifi:[2,9,11,12,14,16,17,21,24,26],specify_input_descriptor:2,specify_output_descriptor:2,split:[2,21,24],split_fil:[0,1],split_imag:24,split_image_0000:24,split_image_0001:24,split_image__info:24,split_mask:24,split_mask_:24,src:26,standard:[5,10,17],start:[11,12,14,16,17,24],start_coord:[9,12,14,21],start_glob:16,start_index:[2,19],start_loc:[11,16],startindex:24,statu:26,step:26,storag:15,store:[14,17,21,24],stream:[9,16,21],string:[5,12,22,23,26],strip:26,style:[22,26],sub:[19,24],sub_imag:17,subclass:26,subdirectori:26,subimag:[2,3,9,16,17,19,21,24],subimage_descriptor:[6,12,13,14],subimagedescriptor:19,subimagerang:19,subject:21,submodul:[0,25],subpackag:25,subproject:26,subst:[22,26],substitut:26,subvolum:24,suffix:[13,19,24],suggest:24,suitabl:[24,26],suppli:16,support:[5,7,10,19,22,24,26],sure:24,surg:24,surpris:26,svg:26,system:[12,14,16,17,19,24,26],tag:[22,26],tag_prefix:[22,26],take:26,tarbal:[22,26],tediou:26,templat:[12,13,19,24],template_nam:5,tend:26,test:[2,3,16,19,24,26],text:26,than:[22,24,26],thei:[12,14],them:[24,26],theori:26,thi:[5,9,10,11,12,13,14,16,17,19,21,22,23,24,26],thing:26,those:[24,26],through:26,tiff:[5,7,13,24],tiff_file_read:[0,4],tiff_format:7,tiff_type_nam:5,tifffileread:13,time:26,to_condensed_format:16,to_dict:19,to_glob:16,to_loc:16,to_oth:16,to_rgb:21,tom:[2,3,5,7,8,9,10,12,14,19,20,21,23,24],too:26,tool:26,top:26,tox:26,track:26,transform:[16,17],transform_coord:17,transform_sub_imag:17,transform_to_oth:17,transpos:[17,19],travi:26,tree:[22,26],tri:26,two:[22,26],type:[5,6,17,19,24],uchar:[5,24],uchar_typ:5,ucl:[2,3,5,7,8,9,10,12,14,19,20,21,23,24],ulong:5,ulong_long_typ:5,ulong_typ:5,ulonglong:5,unabl:22,uncommit:26,uncondit:[22,26],under:[24,26],underli:[17,24],unicod:26,uniqu:26,univers:24,unknown:26,unpack:[22,26],unreleas:26,unsign:24,unsupport:26,untag:[22,26],updat:26,upgrad:26,upload:26,use:[24,26],used:[12,14,16,24,26],useful:26,user:[1,23,24],uses:26,ushort:5,ushort_typ:5,using:[11,12,16,17,24,26],usual:26,util:[0,2,12,14,24,25],valid:[22,24,26],valu:[16,21,24,26],variant:26,varieti:26,variou:[4,26],vcs:[22,26],vector:[12,24],verbos:[22,26],veri:24,version:[0,18,22,24,25],version_from_pip:23,version_from_version:23,versioneer_vers:[0,18],versioneerbadrooterror:26,versioneerconfig:[22,26],versionfile_ab:[22,26],versionfile_sourc:26,versions_from_fil:26,versions_from_parentdir:[22,26],vge:[5,14,24],vge_typ:5,vge_type_nam:5,view:24,viewer:24,virtual:[9,16,24],virtualenv:[24,26],visibl:23,vol:[7,14],vol_format:7,vol_read:[0,4],volfil:14,volum:[19,24],voxel:[12,14,21,24],voxel_s:[8,19],wai:26,warn:24,warner:26,web:26,wellcom:24,went:26,were:[22,24,26],what:26,whatev:26,wheel:26,when:[24,26],where:[12,14,16,21,26],whether:24,which:[3,10,14,16,17,24,26],whose:26,why:26,within:[16,26],without:[17,24,26],work:26,wrap:9,wrapper:[3,17,19],write:[4,6,9,11,12,13,14,16,20,24,26],write_descriptor_fil:19,write_fil:[0,1],write_imag:[11,16],write_json:20,write_lin:[9,11,12,14],write_to_version_fil:26,written:[12,14,24],wrong:26,yield:26,you:[21,22,24,26],your:[24,26],yourproject:26,zero:26},titles:["imagesplit package","imagesplit.applications package","imagesplit.applications.split_files module","imagesplit.applications.write_files module","imagesplit.file package","imagesplit.file.data_type module","imagesplit.file.file_factory module","imagesplit.file.file_formats module","imagesplit.file.file_image_descriptor module","imagesplit.file.file_wrapper module","imagesplit.file.format_factory module","imagesplit.file.image_file_reader module","imagesplit.file.metaio_reader module","imagesplit.file.tiff_file_reader module","imagesplit.file.vol_reader module","imagesplit.image package","imagesplit.image.combined_image module","imagesplit.image.image_wrapper module","imagesplit.utils package","imagesplit.utils.file_descriptor module","imagesplit.utils.json_reader module","imagesplit.utils.utilities module","imagesplit.utils.versioneer_version module","imagesplit.utils.versioning module","ImageSplit","ImageSplit","versioneer module"],titleterms:{The:26,Useful:24,acknowledg:24,api:24,applic:[1,2,3],combined_imag:16,content:[0,1,4,15,18],data_typ:5,detail:24,exampl:24,file:[4,5,6,7,8,9,10,11,12,13,14],file_descriptor:19,file_factori:6,file_format:7,file_image_descriptor:8,file_wrapp:9,format_factori:10,imag:[15,16,17],image_file_read:11,image_wrapp:17,imagesplit:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],instal:24,json_read:20,licens:24,link:24,metaio_read:12,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,26],packag:[0,1,4,15,18],refer:24,split_fil:2,submodul:[1,4,15,18],subpackag:0,tiff_file_read:13,usag:24,util:[18,19,20,21,22,23],version:[23,26],versioneer_vers:22,vol_read:14,write_fil:3}})