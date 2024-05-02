import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import MealDetails from "./MealDetails";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function onSelectHandler() {
    navigation.navigate("MealsDetails", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={onSelectHandler}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    margin: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
    elevation: 4,
  }
});
