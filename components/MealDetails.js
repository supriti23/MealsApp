import { View, Text, StyleSheet } from "react-native";

function MealDetails({
  complexity,
  duration,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    fontSize: 12,
    margin: 4,
  }
});
