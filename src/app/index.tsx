import React, { useMemo } from 'react';

import AnimationTypingText from 'root/components/animation-text';
import GradientBorderView from 'root/components/gradient-border-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { TextStyle } from 'react-native';

const AboutLayout: React.FC = () => {
  const titleStyle = useMemo<TextStyle>(
    () => ({
      width: 300,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    }),
    [],
  );

  return (
    <SafeAreaView className="flex-1 bg-white items-center p-4">
      <GradientBorderView>
        <Text style={titleStyle}>UI 연습용 프로젝트</Text>
      </GradientBorderView>
      <AnimationTypingText text={aboutText} />
    </SafeAreaView>
  );
};

export default AboutLayout;

const aboutText =
  '프로젝트 소개\n\n' +
  '이 프로젝트는 **애니메이션 컴포넌트 실습**을 위한 프로젝트입니다. 다양한 애니메이션 기법을 React Native에서 실습하고, 이를 실제 앱에서 어떻게 활용할 수 있는지 배우는 것을 목표로 하고 있습니다.\n\n' +
  '주요 기능:\n' +
  '- 애니메이션: 여러가지 애니메이션 효과를 구현한 컴포넌트\n' +
  '- 실습: 실제 앱에 적용 가능한 애니메이션 예제\n' +
  '- 학습: React Native의 애니메이션 관련 라이브러리 및 기법 학습';
