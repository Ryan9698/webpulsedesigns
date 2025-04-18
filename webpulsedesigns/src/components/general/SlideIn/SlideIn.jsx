// Reusable Component created for animation effects in different parts of the project. Allows the movement of text and containers Created with standard rules but allows overriding props for one off animations. Uses Framer motion library.
// Can be used with static elements or dynamic UI with optional exit motion.
'use client';
import { motion } from 'framer-motion';

// Default directions to allow ease of use for simple animations: <Slide in direction='down' /> etc.
// Values correspond to entry movement on the x or y axis, with opacity defaulting to 0 to enable a fade-in effect.

const directions = {
  left: { x: -50, opacity: 0 },
  right: { x: 50, opacity: 0 },
  up: { y: -50, opacity: 0 },
  down: { y: 50, opacity: 0 },
};

// Default props for simple animation effects.

export default function SlideIn({
  children,
  // Prop allowing the dynamic creation of motion elements such as motion.div or motion.span
  as = 'div',
  direction = 'left',
  className = '',
  initial: initialOverride,
  animate: animateOverride,
  exit: exitOverride,
  exitDirection,
  includeExit = false,
  delay,
  transition,
}) {
  // Motion tag will take over for the hard-coded element with the 'as' prop allowing dynamic generation of the element.
  // <SlideIn as='span' /> >> motion['span'] >> motion.span
  // Evaluates and returns the new element or if it does not exist, will default to a motion.div

  const MotionTag = motion[as] || motion.div;
  // base variable to check if a direction exists and insert the appropriate values, if not, default to {x: -50, opacity: 0} (left)
  const base = directions[direction] || directions.left;

  // initial override to check if there is a custom input or a direction plugged in, if none, default to base variable

  // EXIT LOGIC (if applicable):

  // A default set of parameters that lets a user choose an exit direction. By default, SlideIn does not have an exit.
  // In order to use it, includeExit must be passed (<SlideIn includeExit exitDirection='left'). Default exit behavior is to
  // exit in the same direction the element entered unless otherwise specified so it is not necessary to have an exitDirection.
  // This design ensures elements always exit logically — either back the way they came, or in a new direction if specified.

  // Default parameters for exit direction. If one exists and it is an 'allowed' direction, use it otherwise default to base(exit in reverse).
  const exitBase =
    exitDirection && directions[exitDirection]
      ? directions[exitDirection]
      : base;

  // Exit variable passed into the props. If includeExit is true(passed into props), default to exitOverride (entered parameters),
  // If they do not exit, spread the values from the exitBase object. If an x key exists in the object, use that parameter, otherwise
  // check y and use if applicable. Spreads into a larger object that can be passed and will default to exiting in the same direction it
  // came and disappear. Otherwise, return undefined and the exit animation will not execute.

  const exit = includeExit
    ? exitOverride || {
        ...('x' in exitBase ? { x: exitBase.x } : {}),
        ...('y' in exitBase ? { y: exitBase.y } : {}),
        opacity: 0,
      }
    : undefined;

  const initial = initialOverride || base;

  // animate override checking for custom input, if not then default behavior (shift to axis: 0)

  const animate = animateOverride || {
    ...('x' in base ? { x: 0 } : {}),
    ...('y' in base ? { y: 0 } : {}),
    opacity: 1,
  };

  const finalTransition = {
    delay: 0.5,
    duration: 1.25,
    ease: 'easeOut',
    ...transition,
    ...(delay != undefined && { delay }),
  };

  // The final return span will create a sliding effect with the props given from direction but allows customization if necessary. Using children allowing manipulation of entire pieces or elements depending on need.
  // Use: <SlideIn direction='up' /> Content </SlideIn> or <SlideIn initial={y:-10, opacity: 0} animate={...} />

  return (
    <MotionTag
      className={className}
      initial={initial}
      animate={animate}
      transition={finalTransition}
      exit={exit}
    >
      {children}
    </MotionTag>
  );
}
