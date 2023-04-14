import { useRouter } from "next/router"
import Output from '../../components/output'
import { Container } from "@mui/material";
import TechContainer from "@/containers/TechContainer";

export default function Tech () {
  const router = useRouter();
  const {tech} = router.query;

  return (
  <TechContainer tech={tech}/>
  )
};

// handleChange={handleChange} handleSubmit={handleSubmit}