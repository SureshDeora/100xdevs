In any project if we use typescript then there are generated javascript files are put in separate folder which is called name as "dist" or "build" and all the typescript files will be create in root directori's src folder 
to make this possible we make changes in tsconfig file
"rootDir": "./src" the root folder within your source files.
where we are going to write codes in typescript and this folder will be used when we do tsc -b to compile our ts code
and second changes in tsconfig is
"outDir": "./dist" an output folder for all emitted files
and dist folder  will be put in .gitignore as well because it is not necessory to put auto-generated files in github

Vim shortcut to create and open file: vi filename e.g. vi .gitignore or vi README.md
to save and exit : esc and then :wq enter
