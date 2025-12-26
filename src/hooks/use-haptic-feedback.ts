'use client';

import { useCallback } from 'react';

type HapticFeedbackType = 'light' | 'medium' | 'heavy' | 'selection' | 'impact';

export const useHapticFeedback = () => {
  const triggerHaptic = useCallback((type: HapticFeedbackType = 'light') => {
    // Check if we're in a browser environment and if haptic feedback is supported
    if (typeof window === 'undefined') return;

    try {
      // Check for Haptic Feedback API (modern browsers)
      if ('vibrate' in navigator) {
        let pattern: number | number[] = 10; // default light vibration

        switch (type) {
          case 'light':
            pattern = 10;
            break;
          case 'medium':
            pattern = 20;
            break;
          case 'heavy':
            pattern = 40;
            break;
          case 'selection':
            pattern = [10];
            break;
          case 'impact':
            pattern = [15, 10, 15];
            break;
        }

        navigator.vibrate(pattern);
      }

      // For iOS devices with haptic feedback support
      if (
        window.DeviceMotionEvent &&
        typeof (
          window.DeviceMotionEvent as unknown as {
            requestPermission?: () => Promise<string>;
          }
        ).requestPermission === 'function'
      ) {
        // iOS haptic feedback through AudioContext (workaround)
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        const audioContext = new AudioContextClass();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(
          0.01,
          audioContext.currentTime + 0.01,
        );
        gainNode.gain.linearRampToValueAtTime(
          0,
          audioContext.currentTime + 0.02,
        );

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.02);
      }
    } catch (error) {
      // Silently fail if haptic feedback is not supported
      console.debug('Haptic feedback not supported:', error);
    }
  }, []);

  const isMobile = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  }, []);

  return {
    triggerHaptic,
    isMobile,
    isSupported: typeof navigator !== 'undefined' && 'vibrate' in navigator,
  };
};
