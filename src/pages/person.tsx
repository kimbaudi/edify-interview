import { useState, useEffect, Fragment } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import {
  Button,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableContainer,
} from '@mui/material';
import { LoadingIcon } from 'components/Icons/Loading';
import Link from 'components/Link';
import { IStarWarsCharacter } from './people';

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Person(): EmotionJSX.Element {
  const { id } = useParams<{ id?: string }>();
  const [data, setData] = useState<IStarWarsCharacter>();

  useEffect(() => {
    if (!id) return;

    fetch(`https://swapi.dev/api/people/${id}`, {})
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((/* error */) => {
        // console.log(error);
      });
  }, [id, setData]);

  return data ? (
    <Fragment>
      <Div>
        <h1>Star Wars character detail</h1>
        <Link to="/">
          <Button variant="contained" size="small">
            Go Back
          </Button>
        </Link>
      </Div>
      <TableContainer>
        <Table>
          <TableBody>
            {Object.entries(data).map(([k, v]) => (
              <TableRow key={k}>
                <TableCell>
                  <b>{k}</b>
                </TableCell>
                <TableCell>{v}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  ) : (
    <LoadingIcon />
  );
}

export default Person;
