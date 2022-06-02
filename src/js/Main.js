import "../style.css"

import { getBurger } from "./burger.js";
import { renderModal } from "./Modal.js";
import { getMods} from "./Mods.js"
import {renderPrice} from "./Pricer.js"
import {getTimer} from "./Timer.js"
import {renderRadiobutton} from "./ModalText.js"
import {renderValidator} from "./Validation.js"

getTimer()
renderPrice()
getMods()
renderModal()
getBurger()
renderRadiobutton()
renderValidator()
