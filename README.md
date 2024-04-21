# PerScholas - SBA-05: Express Server Application

The purpose of this project is to display my understanding of Node and Express, and my capability to implement their features in a practical manner.

## Table of Contents

- [Objectives](#objectives)
- [Usage](#usage)

## Objectives

- Create a server application with Node and Express.
- Create a RESTful API using Express.
- Create Express middleware.
- Use Express middleware.
- Use a template engine to render views with Express.

## Usage

### Get
Performing a GET request is straightforward. Users simply need to click on a part type listed on the left-hand side of the screen (e.g., head), triggering a GET request to retrieve and display the corresponding objects.

### Post
Required Key:Value Pairs:
- name:
- classification:
- manufacturer:
- part_info:
- url:
To perform a POST request, users can utilize a tool like Postman. They only need to input the URL corresponding to the part they want to add (e.g., for a head: localhost:3000/heads) and provide the necessary key-value pairs. 

I will list an example of a part to add to each section. If users wish to add a part, they can refer to the [Armored Core VI](https://armoredcore.fandom.com/wiki/ARMORED_CORE_VI_FIRES_OF_RUBICON/Parts) parts wiki, to keep with the theme. Users may try different parts.

Heads:
    ```name: 20-081 MIND ALPHA
    classification: Head
    manufacturer: ALLMIND
    part_info: Head part developed by ALLMIND for model ACs. Designed as part of a research project to extend human sensory capabilities, with numerous optimizations to create an AC that, to the pilot, feels like an extension of the body.
    url: https://static.wikia.nocookie.net/armoredcore/images/c/cb/Part_icon_ACVI_20-081_MIND_ALPHA.png/revision/latest/scale-to-width-down/250?cb=20230909045907```

Cores:
    ```name: CC-2000 ORBITER
    classification: Core
    manufacturer: Reuse and Development
    part_info: Core part for scout ACs developed by RaD. Originally specced for extravehicular activity in space, this model makes up for what it lacks in combat performance with a light energy footprint and commendable ease of use.
    url: https://static.wikia.nocookie.net/armoredcore/images/5/50/Part_icon_ACVI_CC-2000_ORBITER.png/revision/latest/scale-to-width-down/250?cb=20230909053524```

Legs:
    ```name: NACHTREIHER/42E
    classification: Legs
    manufacturer: Schneider
    part_info: Lightweight bipedal leg parts developed by Schneider. Schneider is a specialist in aerodynamic research, and this model reflects their experiences with a light and highly agile build.
    url: https://static.wikia.nocookie.net/armoredcore/images/1/11/Part_icon_ACVI_NACHTREIHER_42E.png/revision/latest/scale-to-width-down/250?cb=20230909052741 ```

### Patch
To perform a PATCH request, users can use Postman to enter the URL of the specific item they want to patch (e.g., localhost:3000/heads/HC-2000%2FBC%20SHADE%20EYE). It's important to note that %20 represents a space, and %2F represents a slash in the item's name. Users should then specify the key or keys they wish to modify.


### Delete
To perform a DELETE request, users can utilize Postman to input the URL of the specific item they wish to remove, following the same format as described for the PATCH operation. No keys are necessary, as the selected item will be deleted.