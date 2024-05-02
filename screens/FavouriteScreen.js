import { Text, StyleSheet } from "react-native";

function FavouriteScreen() {
  return <Text style={styles.subTitle}>Favourite Screen</Text>;
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 34,
  },
});
