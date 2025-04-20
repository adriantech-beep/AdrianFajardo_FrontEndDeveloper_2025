"use client";

import React from "react";

import styled from "styled-components";
import { useRevealSection } from "../hooks/useRevealSection";
import { useState, useEffect } from "react";

// Grid container
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1em;

  gap: 1rem;

  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`;

// Base grid item with common styles
const BaseGridItem = styled.div`
  transition: transform 1.2s ease-out, opacity 1.2s ease-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition-delay: ${({ index }) => `${index * 0.1}s`};
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

// Grid item that slides in from the left
export const SlideFromLeft = styled(BaseGridItem)`
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(-100px)"};
`;

// Grid item that slides in from the right
export const SlideFromRight = styled(BaseGridItem)`
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(100px)"};
`;

// Grid item that slides in from the bottom (like your original)
export const SlideFromBottom = styled(BaseGridItem)`
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(100px)"};
`;

// Grid item that slides in from the top
export const SlideFromTop = styled(BaseGridItem)`
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(-100px)"};
`;

// Image container inside grid items
export const ImageContainer = styled.div`
  width: 100%;
  /* max-width: 780px; */

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

// Content area below the image
export const ItemContent = styled.div`
  padding: 1.5rem;
  /* background-color: white; */
`;

// A hook that creates a grid with alternating animations
export function useRevealGrid() {
  const { ref, isVisible } = useRevealSection({ threshold: 0.1 });
  const [items, setItems] = useState([]);

  // This effect runs when visibility changes
  useEffect(() => {
    if (isVisible && ref.current) {
      // Get all grid items when the grid becomes visible
      const gridItems = Array.from(ref.current.children);
      setItems(gridItems);
    }
  }, [isVisible, ref]);

  return { ref, isVisible, items };
}

// A component that renders a grid with alternating animations

export function RevealGrid({ children, columns = 2, ...props }) {
  const { ref, isVisible } = useRevealSection({ threshold: 0.1 });

  return (
    <Grid
      ref={ref}
      {...props}
      style={{ gridTemplateColumns: `repeat(${columns},` }}
    >
      {React.Children.map(children, (child, index) => {
        // Determine which direction this item should come from
        const direction = index % 2 === 0 ? "left" : "right";

        // Choose the appropriate component based on direction
        const ItemComponent =
          direction === "left" ? SlideFromLeft : SlideFromRight;

        // Clone the child element with the necessary props
        return (
          <ItemComponent isVisible={isVisible} index={index}>
            {child}
          </ItemComponent>
        );
      })}
    </Grid>
  );
}
