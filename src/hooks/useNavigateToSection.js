import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useNavigateToSection() {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.targetId) {
      const element = document.getElementById(state.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [state]);
}
