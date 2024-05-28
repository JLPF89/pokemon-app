import { Text, View, StyleSheet, Image, Button } from "react-native";
import EvolutionsModal from "./EvolutionsModal";
import React, { useState } from "react";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌱" };
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weakness,
  evolutions,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  const [modalVisible, setModalVisible] = useState(false);

  const handleClickEvolutions = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name} </Text>
        <Text style={styles.hp}>❤️️{hp} </Text>
      </View>

      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View>
        <Text>Moves: {moves.join(", ")}</Text>
      </View>
      <View>
        <Text>Weakness: {weakness.join(", ")}</Text>
      </View>
      {evolutions && evolutions.length > 0 && (
        <View>
          <Button onPress={handleClickEvolutions} title="Evolutions" />
        </View>
      )}
      <EvolutionsModal
        evolutions={evolutions}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.3,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    elevation: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    shadowColor: "#333",
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 4,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  evolutionsButton: {
    marginTop: 10,
    textAlign: "center",
    color: "blue",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
