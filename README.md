# generator-personal-data

## Description

Library for generic personal data.

## Install

```
$ yarn add generator-personal-data
```

## Examples

```
import { generatorPersonalData } from "generator-personal-data";

// in english
const masculineName = generatorPersonalData("us").masculineName;
// return ${random name}

// in portuguese
const masculineName = generatorPersonalData("br").masculineName;
// return ${random name}

// in english
const feminineName = generatorPersonalData("us").feminineName;
// return ${random name}

// in portuguese
const feminineName = generatorPersonalData("br").feminineName;
// return ${random name}

// in english
const midAge = generatorPersonalData("us").midAge;
// return ${random age}

// in portuguese
const midAge = generatorPersonalData("br").midAge;
// return ${random age}

```

## Documentation

```
generatorPersonalData(country) "br" or "us"

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
