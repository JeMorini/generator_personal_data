import {
  brazilianMasculineFirstName,
  brazilianFeminineFirstName,
  brazilianLastName,
  americanMasculineFirstName,
  americanFeminineFirstName,
  americanLastName,
} from "./constants/name";
import { brazilianPets, americanPets } from "./constants/pet";

function genericPersonalData(country: string) {
  const data = {
    masculineName:
      country === "br"
        ? `${
            brazilianMasculineFirstName[
              (
                Math.random() *
                (brazilianMasculineFirstName.length - 1 - 0)
              ).toFixed(0)
            ]
          } ${
            brazilianLastName[
              (Math.random() * (brazilianLastName.length - 1 - 0)).toFixed(0)
            ]
          }`
        : `${
            americanMasculineFirstName[
              (
                Math.random() *
                (americanMasculineFirstName.length - 1 - 0)
              ).toFixed(0)
            ]
          } ${
            americanLastName[
              (Math.random() * (americanLastName.length - 1 - 0)).toFixed(0)
            ]
          }`,
    feminineName:
      country === "br"
        ? `${
            brazilianFeminineFirstName[
              (
                Math.random() *
                (brazilianMasculineFirstName.length - 1 - 0)
              ).toFixed(0)
            ]
          } ${
            brazilianLastName[
              (Math.random() * (brazilianLastName.length - 1 - 0)).toFixed(0)
            ]
          }`
        : `${
            americanFeminineFirstName[
              (
                Math.random() *
                (americanFeminineFirstName.length - 1 - 0)
              ).toFixed(0)
            ]
          } ${
            americanLastName[
              (Math.random() * (americanLastName.length - 1 - 0)).toFixed(0)
            ]
          }`,
    juniorAge: (Math.random() * (21 - 0)).toFixed(0),
    midAge: (Math.random() * (60 - 22) + 22).toFixed(0),
    seniorAge: (Math.random() * (90 - 61) + 61).toFixed(0),
    cpf: `${(Math.random() * (999 - 100) + 100).toFixed(0)}.${(
      Math.random() * (999 - 100) +
      100
    ).toFixed(0)}.${(Math.random() * (999 - 100) + 100).toFixed(0)}-${(
      Math.random() * (99 - 10) +
      10
    ).toFixed(0)}`,
    ssf: `${(Math.random() * (999 - 100) + 100).toFixed(0)}-${(
      Math.random() * (99 - 10) +
      10
    ).toFixed(0)}-XXXX`,
    favoritePet:
      country === "br"
        ? brazilianPets[
            (Math.random() * (brazilianPets.length - 1) - 0).toFixed(0)
          ]
        : americanPets[
            (Math.random() * (americanPets.length - 1) - 0).toFixed(0)
          ],
  };
  return data;
}

export { genericPersonalData };
