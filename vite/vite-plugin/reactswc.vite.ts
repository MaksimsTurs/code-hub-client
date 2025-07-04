import react from "@vitejs/plugin-react-swc";

export default function() {
  return react({ devTarget: 'esnext' });
};