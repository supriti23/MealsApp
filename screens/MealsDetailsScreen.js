import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import List from "../components/List";
import { useLayoutEffect } from "react";

function MealsDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function pressHandler() {
    console.log("pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Tap here" onPress={pressHandler} />,
    });
  }, [navigation, pressHandler]);

  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          textStyle={styles.detailText}
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
        />
        <View style={styles.subTitleContainer}>
          <Text style={styles.title}>Ingredients</Text>
        </View>
        <List data={selectedMeal.ingredients} />
        <View style={styles.subTitleContainer}>
          <Text style={styles.title}>Steps</Text>
        </View>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subTitleContainer: {
    marginHorizontal: 34,
    marginVertical: 2,
    padding: 6,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
});
