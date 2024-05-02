import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ navigation, route }) {

  const categoryId = route.params.categoryId;
  const dispalyedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  const categoryTitle  = CATEGORIES.find((item) => item.id === categoryId).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle
    })
  }, [categoryId, categoryTitle])

  function renderMealItem(itemData) {
    const item = itemData.item;
    const itemProps = {
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    complexity: item.complexity,
    affordability: item.affordability,
    duration: item.duration
  }

    return (
      <MealItem {...itemProps}/>
        
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={dispalyedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
