import { Text, View, StyleSheet, Image } from "react-native";

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
  regions,
  evolutions,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name} </Text>
        <Text style={styles.hp}>❤️️{hp} </Text>
      </View>

      <Image
        source={image}
        style={styles.image}
        aria-label={`${name} pokemon`}
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
      <View>
        <Text>Regions: {regions.join(", ")}</Text>
      </View>
      <View>
        <Text>Evolutions: {evolutions.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    elevation: 5,
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
});
