import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Platform } from "react-native";
import PokemonCard from "./src/components/PokemonCard";
import pokemonData from "./src/components/pokemonData.json";

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {pokemonData.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
            hp={pokemon.hp}
            moves={pokemon.moves}
            weakness={pokemon.weakness}
            regions={pokemon.regions}
            evolutions={pokemon.evolutions}
          />
        ))}
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
