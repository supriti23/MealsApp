import {Text, StyleSheet} from "react-native";

function List({data}){
    return(
        data.map((item) => <Text style={styles.subTitle} key={item}>{item}</Text>)

    )
}

export default List;

const styles = StyleSheet.create({
    subTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 34
      }
})