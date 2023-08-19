import re
import json

# Function to convert a YouTube URL to an embedded URL
def convert_to_embed(url):
    video_id_match = re.search(r'(?<=v=)[^&]+', url)
    if video_id_match:
        video_id = video_id_match.group(0)
        embedded_url = f"https://www.youtube.com/embed/{video_id}"
        return embedded_url
    return None

# Read the JSON file
with open('output.json', 'r') as json_file:
    data = json.load(json_file)

# Convert URLs to embedded URLs
for entry in data:
    original_url = entry.get('url')
    if original_url:
        embedded_url = convert_to_embed(original_url)
        if embedded_url:
            entry['url'] = embedded_url

# Write back the modified data to the JSON file
with open('youtube_embedded_urls2.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)

print("Conversion complete!")
