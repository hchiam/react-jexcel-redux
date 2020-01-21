#!/bin/bash

# (will prompt for password)
curl -u 'hchiam' https://api.github.com/user/repos -d '{"name":"react-jexcel-redux", "description":"React app using jExcel and Redux"}'
git remote add origin 'git@github.com:hchiam/react-jexcel-redux.git'
git add .
git commit -m "Set up repo"
git remote set-url origin https://github.com/hchiam/react-jexcel-redux.git
git push --set-upstream origin master
echo; echo -------; echo;
git status