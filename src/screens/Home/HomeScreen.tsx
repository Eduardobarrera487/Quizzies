import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { HomeCard } from "./components";
import { HomeScreenProps } from "../types";
import { Heading, SafeAreaBox } from "../../components";
import { data } from "./data";

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaBox>
      <ScrollView>
        <View style={homeScreen.rootContainer}>
          <WelcomeCard />

          <Text style={homeScreen.title}>Quizzes</Text>

          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={data}
            renderItem={({ item, index }) => (
              <HomeCard
                title={item.title}
                image={item.image}
                numOfQuestions={item.numOfQuestions}
                duration={item.duration}
                index={index}
                onPress={() => {
                  navigation.navigate("Test", {
                    title: item.title,
                    testName: item.testName,
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaBox>
  );
}

function WelcomeCard() {
  return (
    <View style={welcomeCard.root}>
      <Heading text="AniTest" fontSize={32} color="#fafafa" />
      <Text style={welcomeCard.text}>
        Bienvenido a AniTest! Aquí puedes encontrar una variedad de trivias de anime para probar tu conocimiento!
      </Text>
    </View>
  );
}

const homeScreen = StyleSheet.create({
  rootContainer: {
    padding: 16,
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#525252",
  },
});

const welcomeCard = StyleSheet.create({
  root: {
    backgroundColor: "#289FC2",
    gap: 16,
    borderRadius: 24,
    padding: 24,
  },
  heading: {
    color: "#fafafa",
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "#fafafa",
    fontSize: 18,
    fontWeight: "500",
  },
});
