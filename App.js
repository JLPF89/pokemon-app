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
    evolutions: ["Charmeleon", "Charizard"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    hp: 45,
    image: require("./assets/bulbasaur.png"),
    type: "Grass",
    moves: ["Vine whip", "Tackle", "Growl", "Leech seed", "Razor leaf"],
    weakness: ["Fire", "Ice", "Flying", "Poison"],
    evolutions: ["Venusaur", "Ivysaur"],
  };

  const squirtleData = {
    name: "Squirtle",
    hp: 44,
    image: require("./assets/squirtle.png"),
    type: "Water",
    moves: ["Bubble", "Tackle", "Tail whip", "Water gun"],
    weakness: ["Electric", "Grass"],
    evolutions: ["Wartortle", "Blastoise"],
  };

  const picachuData = {
    name: "Pikachu",
    hp: 35,
    image: require("./assets/pikachu.png"),
    type: "Electric",
    moves: ["Thunder Shock", "Tackle", "Growl", "Tail whip"],
    weakness: ["Fire", "Water", "Ground"],
    evolutions: ["Raichu"],
  };

  const charmeleonData = {
    name: "Charmeleon",
    hp: 58,
    image: require("./assets/charmeleon.png"),
    type: "Fire",
    moves: ["Ember", "Flamethrower", "Slash", "Fire fang"],
    weakness: ["Water", "Rock", "Ground"],
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...picachuData} />
        <PokemonCard {...charmeleonData} />
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
