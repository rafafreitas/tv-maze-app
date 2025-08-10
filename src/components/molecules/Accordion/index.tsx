import React, { useState } from 'react';
import { View } from 'react-native';
import AccordionCollapsible from 'react-native-collapsible/Accordion';
import { IconChevronDown, IconChevronUp } from '@src/components';

import { Text } from '@src/components/atoms';
import { THEME } from '@src/constants';
import { styles } from './style';

interface ICustomStyles {
  header: {};
  content: {};
}
interface ISection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface IAccordionProps {
  sections: ISection[];
}

interface IAccordionContentProps {
  section: ISection;
  customStyles?: ICustomStyles;
}

interface IAccordionHeaderProps {
  section: ISection;
  isActive: boolean;
}

const Header = ({ section, isActive }: IAccordionHeaderProps) => {
  return (
    <View style={styles.headerContainerBase}>
      <Text fontSize={16} variant="black" bold>
        {section.title}
      </Text>
      <View style={styles.headerLine}>
        {isActive ? (
          <IconChevronUp color={THEME.black} />
        ) : (
          <IconChevronDown color={THEME.black} />
        )}
      </View>
    </View>
  );
};

const AccordionContent = ({ section }: IAccordionContentProps) => {
  return <View style={styles?.content}>{section.content}</View>;
};

const Accordion = ({ sections }: IAccordionProps) => {
  const [activeSections, setActiveSections] = useState<number[]>([]);

  const updateSections = (actives: number[]) => setActiveSections(actives);

  return (
    <AccordionCollapsible
      sections={sections}
      activeSections={activeSections}
      renderHeader={(section, i, isActive) => (
        <Header section={section} isActive={isActive} />
      )}
      renderContent={section => <AccordionContent section={section} />}
      onChange={updateSections}
      touchableProps={{
        activeOpacity: 0,
        underlayColor: THEME.white,
      }}
    />
  );
};

export default Accordion;
