const themes = {
    Liverpool: {
        colors: {
            frame: [200, 16, 46],
            frame_inactive: [200, 30, 50],
            frame_incognito: [200, 16, 46],
            frame_incognito_inactive: [200, 30, 50],
            ntp_background: [200, 16, 16],
            toolbar: [150, 12, 12],
            tab_text: [255, 255, 255],
            tab_background_text: [236, 192, 85],
            tab_background_text_inactive: [246, 235, 97],
            tab_background_text_incognito: [236, 192, 85],
            tab_background_text_incognito_inactive: [246, 235, 97],
            bookmark_text: [194, 172, 118],
            ntp_text: [165, 153, 233],
            background_tab: [199, 28, 28],
            background_tab_inactive: [199, 28, 28],
            background_tab_incognito: [199, 28, 28],
            background_tab_incognito_inactive: [199, 28, 28],
            toolbar_button_icon: [0, 178, 169]
        }
    },
    ManCity: {
        colors: {
            frame: [151, 193, 231],
            frame_inactive: [207, 231, 252],
            frame_incognito: [151, 193, 231],
            frame_incognito_inactive: [207, 231, 252],
            ntp_background: [151, 193, 231],
            toolbar: [108, 171, 221],
            tab_text: [28, 44, 91],
            tab_background_text: [61, 80, 138],
            tab_background_text_inactive: [255, 255, 255],
            tab_background_text_incognito: [61, 80, 138],
            tab_background_text_incognito_inactive: [255, 255, 255],
            bookmark_text: [28, 44, 91],
            ntp_text: [56, 53, 77],
            background_tab: [151, 193, 231],
            background_tab_inactive: [151, 193, 231],
            background_tab_incognito: [151, 193, 231],
            background_tab_incognito_inactive: [151, 193, 231],
            toolbar_button_icon: [0, 24, 56]
        }
    },
    Arsenal: {
        colors: {
            frame: [6, 54, 114],
			frame_inactive: [44, 119, 212],
			frame_incognito: [239, 1, 7],
			frame_incognito_inactive: [219, 0, 7],
			ntp_background: [239, 1, 7],
			toolbar: [255, 255, 255], 
			tab_text: [6, 54, 114],
			tab_background_text: [255, 255, 255],
			tab_background_text_inactive: [6, 54, 114],
			tab_background_text_incognito: [6, 54, 114],
			tab_background_text_incognito_inactive: [6, 54, 114],
			bookmark_text: [156, 130, 74],
			ntp_text: [255, 255, 255],
			background_tab: [239, 1, 7],
			background_tab_inactive:[156, 130, 74],
			background_tab_incognito: [239, 1, 7],
			background_tab_incognito_inactive: [156, 130, 74],
			toolbar_button_icon: [0, 24, 56]
        }
    },
    Spurs: {
        colors: {
			frame: [255, 255, 255],
			frame_inactive: [255, 255, 255],
			frame_incognito: [255, 255, 255],
			frame_incognito_inactive: [255, 255, 255],
			ntp_background: [255, 255, 255],
			toolbar: [19, 34, 87], 
			tab_text: [255, 255, 255],
			tab_background_text: [19, 34, 87],
			tab_background_text_inactive: [19, 34, 87],
			tab_background_text_incognito: [255, 255, 255],
			tab_background_text_incognito_inactive: [255, 255, 255],
			bookmark_text: [255, 255, 255],
			ntp_text: [19, 34, 87],
			background_tab: [44, 63, 133],
			background_tab_inactive:[44, 63, 133],
			background_tab_incognito: [44, 63, 133],
			background_tab_incognito_inactive: [44, 63, 133],
			toolbar_button_icon: [255, 255, 255]
		},
    },
    Brighton: {
        colors: {
            frame: [255, 205, 0],
            frame_inactive: [128, 154, 189],
            frame_incognito: [255, 205, 0],
            frame_incognito_inactive: [128, 154, 189],
            ntp_background: [255, 255, 255],
            toolbar: [0, 87, 184],
            tab_text: [255, 255, 255],
            tab_background_text: [0, 87, 184],
            tab_background_text_inactive: [255, 255, 255],
            tab_background_text_incognito: [0, 87, 184],
            tab_background_text_incognito_inactive: [255, 255, 255],
            bookmark_text: [255, 205, 0],
            toolbar_button_icon: [255, 205, 0],
            ntp_text: [0, 87, 184]
        }
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const teamSelect = document.getElementById('teamSelect');
    const preview = document.getElementById('preview');

    teamSelect.addEventListener('change', (e) => {
        const selectedTeam = e.target.value;
        if (selectedTeam && themes[selectedTeam]) {
            preview.style.backgroundColor = themes[selectedTeam].colors.frame;
            
            browser.theme.update(themes[selectedTeam]);
        } else {
            browser.theme.reset();
            preview.style.backgroundColor = '#ffffff';
        }
    });
});