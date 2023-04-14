import { useRouter } from "next/router"


export default function Tech () {
  const router = useRouter();
  const {tech} = router.query;
  
  return (
  <h1>
    <h1>tech : {tech}</h1>
  </h1>
  )
};