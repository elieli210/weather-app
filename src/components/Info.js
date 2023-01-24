import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cities } from "../data/cities";
import { Table } from "react-bootstrap";
import "./info.css";

export const Info = () => {
  const { cityId } = useParams();
  const [recievedData, setRecievedData] = useState({
    main: { temp: 10.1, temp_max: 1.5, temp_min: 1, humidity: 1 },
    wind: { speed: 1 },
    weather: [{ main: "" }],
  });
  const [isPending, setIsPending] = useState(false);
  const latAndLonFinder = useCallback(async () => {
    const selectedCity = cities.find((item) => item.name === cityId);
    const {
      coord: { lat, lon },
    } = selectedCity;
    return { lat, lon };
  }, [cityId]);

  useEffect(() => {
    latAndLonFinder().then(({ lat, lon }) => {
      setIsPending(true);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cdd8edf9dbab3db68f18beee5eb1591e`
        )
        .then((res) => {
          setRecievedData(res.data);
          setIsPending(false);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
          setIsPending(false);
        });
    });
  }, [latAndLonFinder]);

  return (
    <>
      <Table>
        <thead className="text-center">
          <tr className="bg-light text-center">
            <th className="text-center">City name</th>
            <th className="text-center">Weather</th>
            <th className="text-center">Icon</th>
            <th className="text-center">Temperature</th>
            <th className="text-center">Speed wind</th>
            <th className="text-center">humidity</th>
          </tr>
        </thead>

        <thead key={cityId} className="">
          {!isPending ? (
            <tr className=" custom_centered">
              <td className="text-center">{cityId}</td>
              <td className="text-center"> {recievedData?.weather[0].main}</td>

              <td className="text-center">
                {
                  <img
                    src={`http://openweathermap.org/img/wn/${recievedData?.weather[0].icon}@2x.png`}
                    alt="situation pic"
                  />
                }
              </td>
              <td className="text-center">{recievedData?.main.temp}</td>
              <td className="text-center">{recievedData?.wind.speed}</td>
              <td className="text-center">{recievedData?.main.humidity}</td>
            </tr>
          ) : (
            <tr>
              <td>pending</td>
            </tr>
          )}
        </thead>
      </Table>
    </>
  );
};
