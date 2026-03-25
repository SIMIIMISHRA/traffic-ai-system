def traffic_logic(vehicle_count):

    if vehicle_count < 20:
        return "LOW",30

    elif vehicle_count < 40:
        return "MEDIUM",45

    else:
        return "HEAVY",60