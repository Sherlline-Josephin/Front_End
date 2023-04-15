import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { Affix ,Button,Stack} from "@mantine/core";

const Interface=()=>{
    const {animations,animationIndex, setAnimationIndex}=useCharacterAnimations()
return(
    <Affix position={{bottom:50,right:20}}>
        <Stack>
        {animations.map((animation,index)=>(
            <Button key={index} variant={index===animationIndex?"filled":"light"} onClick={()=>{
                setAnimationIndex(index)
            }}> 
                {animation}
            </Button>

        )
            
        )}
        </Stack>
    </Affix>
)
    
}
export default Interface;