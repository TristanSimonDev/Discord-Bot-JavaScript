@echo off

:: Set the Current directory to the location of the script
set CurrentDir=%~dp0

:: Set the StartDir of the Batch Script
set StartDir=%cd%

:: Set the Root directory of the Project
set RootDir=%CurrentDir%..

:: Current directory
echo Current Directory: %CurrentDir%

:: Change to the Root directory
cd /d %StartDir%

:: List the contents of the Root directory
dir

:: Move package to the Dockerfile directory
move "%StartDir%\Dockerfile" "%RootDir%"

:: Goback to the Folder where the Docker and the Batch file is
cd /d %RootDir%

:: Build DockerImage
docker build --no-cache -t test:1.3 -f Dockerfile .

move "%RootDir%\Dockerfile" "%StartDir%"

pause