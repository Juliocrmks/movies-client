from imdb import cinemagoer


def get_series_description(series_name):
    ia = cinemagoer()
    series = ia.search_movie(series_name)

    if not series:
        return None

    # Assuming the first result is the series we are looking for
    series_id = series[0].getID()
    series_info = ia.get_movie(series_id)
    series_description = series_info.get('plot outline', None)

    return series_description


def main():
    series_names = ['Scrubs', 'Parks and rec', 'Brooklyn 99', 'Community', 'Sword Art Online', 'Jack Ryan', 'Succession', 'Megalobox', 'Reboot', 'Eighty Six', 'Only Murders in the Building',
                    'Shaman King', 'Erased', 'Beef', 'Love and Death', 'The hauting of hillhouse', 'Attack on Titan', 'Psycho Pass', 'Demon Slayer', 'Ranking of Kings']  # Add your series names to this list

    for name in series_names:
        description = get_series_description(name)
        if description:
            print(f"{name}: {description}\n")
        else:
            print(f"Series '{name}' not found or description not available.\n")


if __name__ == "__main__":
    main()
