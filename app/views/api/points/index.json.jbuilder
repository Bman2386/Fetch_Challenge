json.array! @points do |point|
    json.partial! 'api/points/point', point: point
end