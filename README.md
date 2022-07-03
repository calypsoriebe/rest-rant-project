# Rest-Rant Project
This will be an app for posting reviews about food places
***
## Table to refer to 
|Method|Path|Purpose|
|------|----|-------|
|GET|/|Home Page
|------|----|-------|
|GET|/places|places Index Page|
|------|----|-------|
|POST|/places|create new place|
|------|----|-------|
|GET|/places/new|Form page for creating new place
|------|----|-------|
|GET|/places/:id|Details about place|
|------|----|-------|
|PUT|/places/:id|Update a place|
|------|----|-------|
|GET|/places/:id/edit|Form page for editing an existing place|
|------|----|-------|
|DELETE|/places/:id|Delete a place|
|------|----|-------|
|POST|/places/:id/rant|Create a rant|
|------|----|-------|
|DELETE|/places/:id/rant/:rantid|Delete a rant|
|------|----|-------|
|GET|*|404 page|