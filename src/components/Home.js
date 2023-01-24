import React from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { cities } from "../data/cities";
export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="note">please choose your city to see the weather:</div>
      <br />

      <Table>
        <thead>
          <tr className="bg-light ">
            <th className="text-center"> city name</th>
            <th className="text-center"> country name</th>
            <th className="text-center"> coord</th>
          </tr>
        </thead>
        {cities.map((item) => {
          return (
            <thead key={item.id}>
              <tr
                className="cursor-pointer"
                onClick={() => {
                  navigate(`/${item.name}`);
                }}
              >
                <td className="cursor-pointer">{`${item.name}`}</td>
                <td className="cursor-pointer">{`${item.country}`}</td>
                <td className="cursor-pointer">{`${item.coord.lon} ${item.coord.lat}`}</td>
              </tr>
            </thead>
          );
        })}
      </Table>
    </>
  );
};
