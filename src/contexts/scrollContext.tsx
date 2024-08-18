"use client"
import React, { createContext, useContext, useRef, RefObject } from 'react';

type SectionRefs = {
  aboutMeRef: RefObject<HTMLDivElement>;
  skillRef: RefObject<HTMLDivElement>;
  studyRef: RefObject<HTMLDivElement>;
  expRef:RefObject<HTMLDivElement>;
  contactUsRef: RefObject<HTMLDivElement>;
};

type ScrollContextType = {
  sectionRefs: SectionRefs;
  scrollToSection: (section: keyof SectionRefs) => void;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sectionRefs: SectionRefs = {
    aboutMeRef: useRef<HTMLDivElement>(null),
    skillRef: useRef<HTMLDivElement>(null),
    studyRef : useRef<HTMLDivElement>(null),
    expRef : useRef<HTMLDivElement>(null),
    contactUsRef: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof SectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ sectionRefs, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};
