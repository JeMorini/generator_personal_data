# generic-personal-data

## Description

Library for generic personal data.

## Install

```
$ yarn add generic-personal-data
```

## Examples

```
import { genericPersonalData } from "generic-data-person";

// in english
const masculineName = genericPersonalData("us").masculineName;
// return ${random name}

// in portuguese
const masculineName = genericPersonalData("br").masculineName;
// return ${random name}

// in english
const feminineName = genericPersonalData("us").feminineName;
// return ${random name}

// in portuguese
const feminineName = genericPersonalData("br").feminineName;
// return ${random name}

// in english
const midAge = genericPersonalData("us").midAge;
// return ${random age}

// in portuguese
const midAge = genericPersonalData("br").midAge;
// return ${random age}

```

## Documentation

```
genericPersonalData(country) "br" or "us"

Props                     Type                      Description                                 Usage
-----------------------------------------------------------------------------------------------------------
masculineName           {string}                masculine name                                (optional)
feminineName            {string}                feminine name                                 (optional)
juniorAge               {string}                age 0 - 21                                    (optional)
midAge                  {string}                age 22 - 60                                   (optional)
seniorAge               {string}                age 61 - 90                                   (optional)
cpf                     {string}                brazilian cpf                                 (optional)
cpf                     {string}                american ssf                                  (optional)
favoritePet             {string}                animal                                        (optional)
```
