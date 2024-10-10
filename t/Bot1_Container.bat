@echo off
:: Set the Current directory to the location of the script
set CurrentDir=%~dp0

set StartDir=%cd%

:: Set the Root directory to three levels up from the Current directory
set RootDir=%CurrentDir%..

:: Echo the Current directory
echo Current Directory: %RootDir%

:: Change to the Root directory
cd /d %RootDir%

:: List the contents of the Root directory
dir

:: Move package.json to the test directory
xcopy "%RootDir%\package*.json" "%StartDir%"

cd /d %CurrentDir%

docker build -f Dockerfile -t test:1.3 .

del "%CurrentDir%/package*.json"

pause