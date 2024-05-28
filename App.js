import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Platform } from "react-native";
import PokemonCard from "./src/components/PokemonCard";

export default function App() {
  const charmanderData = {
    name: "Charmander",
    hp: 39,
    image: require("./assets/charmander.png"),
    type: "Fire",
    moves: ["Ember", "Tackle", "Scratch", "Leer", "Fire fang"],
    weakness: ["Water", "Ground", "Rock"],
    evolutions: [
      {
        name: "Charmeleon",
        image: require("./assets/charmeleon.png"),
        type: "Fire",
        hp: 58,
        moves: ["Ember", "Flamethrower", "Slash", "Fire fang"],
        weakness: ["Water", "Rock", "Ground"],
      },
      {
        name: "Charizard",
        image: require("./assets/charizard.png"),
        type: "Fire",
        hp: 78,
        moves: ["Ember", "Flamethrower", "Slash", "Fire fang"],
        weakness: ["Water", "Rock", "Ground"],
      },
    ],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    hp: 45,
    image: require("./assets/bulbasaur.png"),
    type: "Grass",
    moves: ["Vine whip", "Tackle", "Growl", "Leech seed", "Razor leaf"],
    weakness: ["Fire", "Ice", "Flying", "Poison"],
    evolutions: [
      {
        name: "Ivysaur",
        image: require("./assets/ivysaur.png"),
        type: "Grass",
        hp: 60,
        moves: ["Vine whip", "Razor Leaf", "Solar Beam", "Tackle"],
        weakness: ["Fire", "Ice", "Flying", "Psychic"],
      },
      {
        name: "Venusaur",
        image: require("./assets/venusaur.png"),
        type: "Grass",
        hp: 80,
        moves: ["Vine whip", "Solar Beam", "Razor Leaf", "Earthquake"],
        weakness: ["Fire", "Ice", "Flying", "Psychic"],
      },
    ],
  };

  const squirtleData = {
    name: "Squirtle",
    hp: 44,
    image: require("./assets/squirtle.png"),
    type: "Water",
    moves: ["Bubble", "Tackle", "Tail whip", "Water gun"],
    weakness: ["Electric", "Grass"],
    evolutions: [
      {
        name: "Wartortle",
        image: require("./assets/wartortle.png"),
        type: "Water",
        hp: 59,
        moves: ["Bubble", "Water Gun", "Bite", "Rapid Spin"],
        weakness: ["Electric", "Grass"],
      },
      {
        name: "Blastoise",
        image: require("./assets/blastoise.png"),
        type: "Water",
        hp: 79,
        moves: ["Hydro Pump", "Water Gun", "Surf", "Bite"],
        weakness: ["Electric", "Grass"],
      },
    ],
  };

  const pikachuData = {
    name: "Pikachu",
    hp: 35,
    image: require("./assets/pikachu.png"),
    type: "Electric",
    moves: ["Thunder Shock", "Tackle", "Growl", "Tail whip"],
    weakness: ["Ground"],
    evolutions: [
      {
        name: "Raichu",
        image: require("./assets/raichu.png"),
        type: "Electric",
        hp: 60,
        moves: ["Thunderbolt", "Quick Attack", "Iron Tail", "Thunder Punch"],
        weakness: ["Ground"],
      },
    ],
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...pikachuData} />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    ...(Platform.OS === "android" ? { paddingTop: 50 } : {}),
  },
});
