/*
   Licensed to the Apache Software Foundation (ASF) under one
   or more contributor license agreements.  See the NOTICE file
   distributed with this work for additional information
   regarding copyright ownership.  The ASF licenses this file
   to you under the Apache License, Version 2.0 (the
   "License"); you may not use this file except in compliance
   with the License.  You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing,
   software distributed under the License is distributed on an
   "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   KIND, either express or implied.  See the License for the
   specific language governing permissions and limitations
   under the License.
*/

// the next line makes it impossible to see Contacts on the HTC Evo since it
// doesn't have a scroll button
// document.addEventListener("touchmove", preventBehavior, false);
document.addEventListener("deviceready", deviceInfo, true);

document.addEventListener("backbutton", function(e){
	navigator.app.exitApp();		
}, false);

function exitAppPopup() {
	navigator.notification.confirm(
		  'Salir de TodoJujuy.com?'
		, function(button) {
			  if (button == 2) {
				  navigator.app.exitApp();
			  }
		  }
		, 'Salir'
		, 'No,Si'
	);  
	return false;
}

