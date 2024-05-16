import React, { useState } from "react";
import { Modal, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import PokemonCard from "./PokemonCard";

export default function EvolutionsModal({ evolutions, modalVisible, setModalVisible }) {
  const [selectedEvolution, setSelectedEvolution] = useState(null);

  const handleEvolutionClick = (evolution) => {
    setSelectedEvolution(evolution);
    setModalVisible(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {evolutions.map((evolution, index) => (
            <TouchableOpacity key={index} onPress={() => handleEvolutionClick(evolution)}>
              <Text style={styles.evolution}>{evolution}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
      {selectedEvolution && (
        <PokemonCard {...selectedEvolution} />
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  evolution: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeText: {
    marginTop: 20,
    color: "blue",
    fontSize: 16,
  },
});
