import { AnimatePresence } from "framer-motion";
import React, { useState, useEffet } from "react";
import { AnimatePresence, motion } from 'framer-motion'

import config from '../config/config'
import state from "../store";
import { download } from '../assets'
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'


const Customizer = () => {
  return <div>Customizer</div>;
};

export default Customizer;
