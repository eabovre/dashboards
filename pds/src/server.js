import Mozaik from 'mozaik';
import config from '../config';
import github from 'mozaik-ext-github/client';
import json from 'mozaik-ext-json/client';

const mozaik = new Mozaik(config);

mozaik.bus.registerApi('github', github);
mozaik.bus.registerApi('json', json);

mozaik.startServer();
