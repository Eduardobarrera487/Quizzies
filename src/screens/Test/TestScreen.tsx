import { memo, useEffect, useRef, useState } from "react";
import {
  Header,
  LoadingIndicator,
  Question as QuestionComponent,
} from "./components";
import PagerView from "react-native-pager-view";
import { TestScreenProps } from "../types";

import { View } from "react-native";
import { shuffleArray } from "./shuffle";
import { Question } from "../../data/types";
import { flagQuestions } from "../../data";
import { solarSystemQuestions } from "../../data/solarSystem";
import { jjkQuestions } from "../../data/jjk";
import { bnhaQuestions } from "../../data/bnha";

export function TestScreen({ navigation, route }: TestScreenProps) {
  const category = route.params.testName;

  const [questions, setQuestions] = useState<Question[]>([]);

  const startTimeRef = useRef<number>(Date.now());
  const pagerViewRef = useRef<PagerView>(null);

  // NEcesarios para el header
  const [correctIndexes, setCorrectIndexes] = useState<number[]>([]);
  const [incorrectIndexes, setIncorrectIndexes] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Esto es para correr los tests
  useEffect(() => {
    const questions = (() => {
      switch (category) {
        case "flags":
          return flagQuestions;
        case "solarSystem":
          return solarSystemQuestions;
        case "jjk":
          return jjkQuestions;
        case "bnha":
          return bnhaQuestions;
      }
    })();
    setQuestions(shuffleArray(questions));
    console.log("prueba de carga de test");
  }, [category]);


  useEffect(() => {
    if (questions.length > 0) {
      navigation.setOptions({
        header: () => (
          <Header
            current={currentQuestionIndex}
            numOfQuestions={questions.length}
            correct={correctIndexes}
            incorrect={incorrectIndexes}
            onQuestionTouch={(index) => {
              pagerViewRef.current?.setPage(index);
            }}
            onBackPress={navigation.goBack}
          />
        ),
      });
    }
  }, [
    navigation,
    currentQuestionIndex,
    correctIndexes,
    incorrectIndexes,
    questions.length,
    pagerViewRef,
  ]);

  // Determina si el ususario ha completado el test
  useEffect(() => {
    if (
      questions.length > 0 &&
      questions.length === correctIndexes.length + incorrectIndexes.length
    ) {
      navigation.push("Result", {
        correctAnswers: correctIndexes.length,
        totalQuestions: questions.length,
        timeTaken: Date.now() - startTimeRef.current,
      });
    }
    console.log("probando");
  }, [
    navigation,
    questions.length,
    correctIndexes.length,
    incorrectIndexes.length,
    startTimeRef,
  ]);

  console.log("TestScreen");

  if (questions.length === 0) {
    return <LoadingIndicator />;
  }

  return (
    <MemoizedPagerView
      questions={questions}
      pagerViewRef={pagerViewRef}
      onAnswered={(index, answer) => {
        if (answer) {
          setCorrectIndexes((prev) => [...prev, index]);
        } else {
          setIncorrectIndexes((prev) => [...prev, index]);
        }
      }}
      onPageSelected={setCurrentQuestionIndex}
    />
  );
}

interface PagerViewComponentProps {
  questions: Question[];
  pagerViewRef: React.RefObject<PagerView>;
  onAnswered: (index: number, answer: boolean) => void;
  onPageSelected: (index: number) => void;
}

//guarda en memoria el valor que puso previamente en la pantalla anterior
const MemoizedPagerView = memo(
  function PagerViewComponent({
    questions,
    pagerViewRef,
    onAnswered,
    onPageSelected,
  }: PagerViewComponentProps) {
    
    return (
      <PagerView
        ref={pagerViewRef}
        style={{
          flex: 1,
        }}
        initialPage={0}
        onPageSelected={({ nativeEvent }) => {
          onPageSelected(nativeEvent.position);
        }}>
        {questions.map((question, index) => {
          return (
            <View key={question.id}>
              <QuestionComponent
                question={question}
                onAnswered={(correct) => onAnswered(index, correct)}
              />
            </View>
          );
        })}
      </PagerView>
    );
  },

  (prevProps, curProps) =>
    prevProps.questions.length === curProps.questions.length &&
    prevProps.pagerViewRef === curProps.pagerViewRef
);
