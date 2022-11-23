import os
import shutil

path_source = r"D:\react\react-calculator"
path_destination = r"D:\react1\react-calculator"

items = [
    # "node_modules",
    # "public",
    # "src",
    # ".gitignore",
    "copy_files.py",
    "notes.md",
    "package-lock.json",
    "package.json",
    "README.md"
]

for item in items:
    complete_path_source = os.path.join(path_source,item)
    complete_path_destination = os.path.join(path_destination,item)
    
    if os.path.isfile(complete_path_source):
        shutil.copy(complete_path_source, complete_path_destination)
    else:
        shutil.copytree(complete_path_source,complete_path_destination)


# source_folder = r"D:\react\react-calculator\node_modules\\"
# destination_folder = r"D:\react1\react-calculator\node_modules\\"
# shutil.copytree(source_folder,destination_folder)



# for file_name in os.listdir(source_folder):
#     # construct full file path
#     source = source_folder + file_name
#     destination = destination_folder + file_name
#     # copy only files
#     if os.path.isfile(source):
#         # shutil.copy(source, destination)
#         print('copied', file_name)
#     print(source)


# shutil.copytree("D:\githubs", "D:\githubs2")
# shutil.copytree(source_folder,destination_folder)
# shutil.copytree("D:\react\react-calculator\public","D:\react1\react-calculator\public")
# shutil.copytree("D:\react\react-calculator\src","D:\react1\react-calculator\src")
# shutil.copytree("D:\react\react-calculator\.gitignore","D:\react1\react-calculator\.gitignore")
# shutil.copytree("D:\react\react-calculator\notes.md","D:\react1\react-calculator\notes.md")
# shutil.copytree("D:\react\react-calculator\package-lock.json","D:\react1\react-calculator\package-lock.json")
# shutil.copytree("D:\react\react-calculator\package-lock.json","D:\react1\react-calculator\package-lock.json")
# shutil.copytree("D:\react\react-calculator\README.md","D:\react1\react-calculator\README.md")
# shutil.copytree("D:\react\react-calculator\copy_files.py","D:\react1\react-calculator\copy_files.py")