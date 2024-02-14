document.addEventListener('DOMContentLoaded', function() {
    const artFormSelection = document.getElementById('artFormSelection');
    const dynamicFields = document.getElementById('dynamicFields');
    const createButton = document.getElementById('createButton');
    const promptOutput = document.getElementById('promptOutput');
    const mainSubject = document.getElementById('mainSubject');
    const background = document.getElementById('background');
    const emotionSelection = document.getElementById('emotionSelection');
    const colorScheme = document.getElementById('colorScheme');
    const ar = document.getElementById('ar');
    const quality = document.getElementById('quality');
    const seed = document.getElementById('seed');


    artFormSelection.addEventListener('change', function() {
        const selection = this.value;
        dynamicFields.innerHTML = ''; // Clear previous dynamic fields

        // Example: Add dynamic fields for "Photograph"
        if (selection === 'photograph') {
            const html = `
                <label for="cameraDistance">Camera Distance:</label>
                <select id="cameraDistance">
                    <option value="">Please Select</option>
                    <option value="extremeCloseUp">Extreme Close up</option>
                    <option value="closeUp">Close up</option>
                    <option value="mediumShot">Medium Shot</option>
                    <option value="mediumLongShot">Medium Long Shot</option>
                    <option value="fullShot">Full  Shot</option>
                    <option value="longShot">Long Shot</option>
                    <option value="extremeLongShot">Extreme Long Shot</option>
                </select>
                
                <label for="cameraAngels">Camera Angels:</label>
                <select id="cameraAngels">
                    <option value="">Please Select</option>
                    <option value="eyeLevel">Eye Level View</option>
                    <option value="highAngle">High Angle</option>
                    <option value="lowAngel">Low Angel</option>
					<option value="birdView">Bird's Eye View</option>
                    <option value="droneView">Drone View</option>                    
					<option value="overShoulder">Over the Shoulder Shot</option>
                    
                    <!-- Add more options as needed -->
                </select>
                
                <label for="cameraLens">Camera lens:</label>
                <select id="cameraLens">
                    <option value="">Please Select</option>
                    <option value="fastShutter">Fast Shutter Speed</option>
                    <option value="slowShutter">Slow Shutter Speed</option>
                	<option value="bokeh">Bokeh Lens</option>
                	<option value="telePhoto">Telephoto Lens</option>
                	<option value="marcoLens">Marco Lens</option>
                	<option value="wideAngel">Wide Angel Lens</option>
                	<option value="motionBlur">Motion Blur</option>
                     
                    <!-- Add more options as needed -->
                </select>
                
                <label for="cameraoutlighting">Camera Outdoor Lighting:</label>
                <select id="cameraoutlighting">
                    <option value="">Please Select</option>
                    <option value="goldenHourLighting">Golden Hour Lighting</option>
                    <option value="blueHourLighting">Blue Hour Lighting</option>
                    <option value="middayLighting">Mid Day Lighting</option>
                    <option value="dappledLighting">Dappled Lighting</option>
                    <option value="SilhouetteLighting">Silhouette lighting</option>
                    <option value="RimLighting">Rim lighting</option>
                    <option value="OvercastLighting">Overcast lighting</option>
                    <option value="SunFlare">Sun flare</option>
               		</select>
                
                <label for="camerainlighting">Camera Indoor Lighting:</label>
                <select id="camerainlighting">
                    <option value="">Please Select</option>
                    <option value="warmlighting">Warm Lighting</option>
                    <option value="CoolLighting">Cool Lighting</option>
                    <option value="lowKeyLighting">Low key lighting</option>
                    <option value="highKeyLighting">High key lighting</option>
                    <option value="rimLighting">Rim lighting</option>
                    <option value="backLighting">Backlighting</option>
                    <option value="rembrandtLighting">Rembrandt lighting</option>
                     <option value="butterflyLighting">Butterfly lighting</option>
                    <option value="chiaroscuroLighting">Chiaroscuro lighting</option>
                </select>
                
                <label for="creativeFilm">Creative Film Type:</label>
                <select id="creativeFilm">
                    <option value="">Please Select</option>
                    <option value="warmlighting">Kodachrome</option>
                    <option value="CoolLighting">Autochrome</option>
                    <option value="lowKeyLighting">Lomography</option>
                    <option value="polaroid">polaroid</option>
                    <option value="doubleExposure">Double Exposure</option>
                    <option value="instagram">Instagram</option>
                    <option value="colorSplash">Color Splash</option>
					<option value="filmStill">Film Still</option>

         		</select>
                
                <label for="filmReference">Cinematography Reference:</label>
                <select id="filmReference">
                    <option value="">Please Select</option>
                    <option value="mood4Love">In the Mood for Love: 2000</option>
                    <option value="bladeRunner">Blade Runner 2049: 2017</option>
                    <option value="seven">Se7en: 1995</option>
                    <option value="budapestHotel">The Grand Budapest Hotel: 2014</option>
                    <option value="lawrenceArabia">Lawrence of Arabia: 1962</option>
                    <option value="amelie">Amelie: 2001</option>
                    <option value="inception">Inception: 2010</option>
                     <option value="hero">Hero: 2002</option>
                    <option value="revenant">The Revenant: 2015</option>
               </select>
               
                <label for="photogenre">Photo Genre:</label>
                <select id="photogenre">
                    <option value="">Please Select</option>
                    <option value="sportsPhoto">Action sports photography from ESPN</option>
                    <option value="fashionCover">Fashion photography from Vogue magazine</option>
                    <option value="newsPhoto">Candid street portrait from the New York Times</option>
                    <option value="corpPhoto">Professional corporate portrait from Forbes cover</option>
                    <option value="celebrityNews">Event photography from celebrity news website</option>
                    <option value="streetFashion">Candid street fashion photography</option>
            
                </select>
                
            
                
            `;
            dynamicFields.innerHTML = html;
        }
        if (selection === 'illustration') {
            const html = `
                <label for="IllustrationStyle">Illustration Styles:</label>
                <select id="IllustrationStyle">
                    <option value="">Please Select</option>
                    <option value="stencil">Stencil Street Art</option>
                    <option value="ballpoint">Ballpoint Pen Art</option>
                    <option value="pencil">Pencil Sketch</option>
                    <option value="InkDrawing">Ink  Drawing</option>
                    <option value="politicalCartoon">Political cartoon</option>
                    <option value="charcoal">charcoal Sketch</option>
                    <option value="doodle">Doodle Free Hand Drawing</option>
                     <option value="storyBoarding">Story Boarding</option>                   
                     <option value="fashion">Fashion Illustration</option>                   
                     <option value="bizCartoon">Business Cartoon</option>                   
                </select>
               
               <label for="Cartoonist">Cartoonist Reference:</label>
                <select id="Cartoonist">
                    <option value="">Please Select</option>
                    <option value="jPulitzer">Joseph Pulitzer</option>
                    <option value="sAdams">Scott Adams</option>
                    <option value="dFletcher">David Fletcher</option>
                    <option value="mAnderson">Mark Anderson</option>
                    <option value="tFishburne">Tom Fishburne</option>
                    <option value="tGoff">Ted Goff</option>
                    <option value="mHill">Mark Hill</option>
                 
                </select>
                 
                
            `;
            dynamicFields.innerHTML = html;
        }
        
         if (selection === '3d') {
            const html = `
                <label for="3dRender">3D Render:</label>
                <select id="3dRender">
                    <option value="">Please Select</option>
                    <option value="octane">Octane Render</option>
                    <option value="unreal">Unreal Engine</option>
                    <option value="maxwell">Maxwell Render</option>  
                    <option value="eevee">Eevee render</option>  
                    <option value="vRay">V-Ray render</option>  
                                      
                    <!-- Add more options as needed -->
                </select>
            `;
            dynamicFields.innerHTML = html;
        }
        // Implement similar blocks for 'illustration' and '3d' with respective options
    });

  createButton.addEventListener('click', function() {
        let promptParts = [];

        if (artFormSelection.value && artFormSelection.value !== "Please Select") {
            promptParts.push(`A ${artFormSelection.options[artFormSelection.selectedIndex].text}`);
        }

        if (mainSubject.value.trim()) {
            promptParts.push(`of ${mainSubject.value.trim()}`);
        }

        if (background.value.trim()) {
            promptParts.push(`${background.value.trim()}`);
        }

        if (emotionSelection.value && emotionSelection.value !== "Please Select") {
            promptParts.push(`${emotionSelection.options[emotionSelection.selectedIndex].text}`);
        }
		if (colorScheme.value && colorScheme.value !== "Please Select") {
            promptParts.push(`${colorScheme.options[colorScheme.selectedIndex].text}`);
        }
        if (ar.value && ar.value !== "Please Select") {
            promptParts.push(`${ar.options[ar.selectedIndex].text}`);
        }
        if (quality.value && quality.value !== "Please Select") {
            promptParts.push(`${quality.options[quality.selectedIndex].text}`);
        }
        if (seed.value && seed.value !== "Please Select") {
            promptParts.push(`${seed.options[seed.selectedIndex].text}`);
        }
        
        // Include dynamic fields in the prompt
        dynamicFields.querySelectorAll('select').forEach(select => {
            if (select.value && select.value !== "Please Select") {
                // This assumes the first option is "Please Select" and should be skipped.
                promptParts.push(`${select.options[select.selectedIndex].text}`);
            }
            
            
        });

        let finalPrompt = promptParts.length > 0 ? promptParts.join('. ') + '.' : "Please make some selections to build a prompt.";
        promptOutput.textContent = finalPrompt;
    });
});

