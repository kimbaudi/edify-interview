import { useState, useEffect, Fragment } from 'react';
import styled from '@emotion/styled';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Button, List, ListItem } from '@mui/material';
import { LoadingIcon } from 'components/Icons/Loading';
import Link from 'components/Link';

const P = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function People(): EmotionJSX.Element {
  const [data, setData] = useState<IStarWarsCharacter[]>();

  useEffect(() => {
    fetch('https://swapi.dev/api/people/', {})
      .then((resp) => resp.json())
      .then(({ results }) => {
        setData(results);
      })
      .catch((/* error */) => {
        // console.log(error)
      });
  }, [setData]);

  return data ? (
    <Fragment>
      <h1>Star Wars characters list</h1>
      <List>
        {data.map(({ name /* , height, mass, gender */ }, i) => (
          <ListItem key={name}>
            <P>
              <b>{name}</b>
              <Link to={`/${i + 1}`}>
                <Button variant="contained" size="small">
                  View Detail
                </Button>
              </Link>
            </P>
          </ListItem>
        ))}
      </List>
    </Fragment>
  ) : (
    <LoadingIcon />
  );
}

export default People;

export interface IStarWarsCharacter {
  name: string;
  height: number;
  mass: number;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}
