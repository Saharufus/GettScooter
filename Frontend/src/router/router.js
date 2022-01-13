import React from "react";
import Home from "../components/pages/Home";
import PickScooter from "../components/pages/PickScooter";
import ScooterCard from "../components/ScooterCard";

export const privateRoutes = [
  { path: "/PickScooter", component: PickScooter, exact: true },
  { path: "/ScooterCard/:scooterID", component: ScooterCard, exact: false },
];

export const publicRoutes = [
  { path: "/welcome", component: Home, exact: true },
];
