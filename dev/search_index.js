var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = TiledExtractor","category":"page"},{"location":"#TiledExtractor","page":"Home","title":"TiledExtractor","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for TiledExtractor.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [TiledExtractor]","category":"page"},{"location":"#TiledExtractor.FixedGridTiling","page":"Home","title":"TiledExtractor.FixedGridTiling","text":"FixedGridTiling(chunk_sizes...)\n\nTiles a domain into a fixed grid of chunks. \n\nGeometries that are fully encompassed by a tile are processed in bulk whenever a tile is read.\n\nGeometries that lie on chunk boundaries are added to a separate queue, and whenever a tile is read,  the view on the tile representing the chunk of that geometry that lies within the tile is added to a queue.  These views are combined by a separate worker task, and once all the information on a geometry has been read, it is processed by a second worker task.\n\nHowever, this approach could potentially change.  If we know the statistic is separable and associative (like a histogram with fixed bins, or mean, min, max, etc.), we could simply process the partial geometries in the same task that reads the tile, and recombine at the end.   This would allow us to avoid the (cognitive) overhead of  managing separate channels and worker tasks.  But it would be a bit less efficient and less general over the space of zonal functions.  It would, however, allow massive zonals - so eg \n\n\n\n\n\n","category":"type"},{"location":"#TiledExtractor.TileOperation","page":"Home","title":"TiledExtractor.TileOperation","text":"TileOperation(; contained, shared)\nTileOperation(operation)\n\nCreate a tile operation that can operate on a TileState and return a tuple of results from the contained and shared ranges.\n\nArguments\n\ncontained: Function to apply to contained (non-overlapping) regions\nshared: Function to apply to shared (overlapping) regions\n\nExamples\n\n# Different functions for contained and shared regions\nop = TileOperation(\n    contained = (data, meta) -> mean(data),\n    shared = (data, meta) -> sum(data)\n)\n\n# Same function for both\nop = TileOperation((data, meta) -> mean(data))\n\n\n\n\n\n","category":"type"},{"location":"#TiledExtractor.TileState","page":"Home","title":"TiledExtractor.TileState","text":"TileState{N, TileType, RowVecType}\nTileState(tile::TileType, tile_offset::CartesianIndex{N}, contained_rows::AbstractVector, shared_rows::AbstractVector)\n\nA struct that holds all the state that is local to a single tile.\n\nFields\n\ntile: The read data of the tile.\ntile_ranges: The ranges that the tile covers in the parent array\ncontained_ranges: The ranges of the rows that are fully contained in the tile\nshared_ranges: The ranges of the rows that are only partially contained in the tile, i.e shared with other tiles\ncontained_metadata: The rows that are fully contained in the tile\nshared_metadata: The rows that are only partially contained in the tile, i.e shared with other tiles\n\n\n\n\n\n","category":"type"},{"location":"#TiledExtractor.TilingStrategy","page":"Home","title":"TiledExtractor.TilingStrategy","text":"abstract type TilingStrategy\n\nAbstract type for tiling strategies.  Must hold all necessary information to create a tiling strategy.\n\nAll tiling strategies MUST implement the following methods:\n\nget_tile_indices(tiling, range)\ntile_to_ranges(tiling, index)\nsplit_ranges_into_tiles(tiling, ranges)\n\n\n\n\n\n","category":"type"},{"location":"#TiledExtractor.crop_ranges_to_array-Union{Tuple{T}, Tuple{N}, Tuple{AbstractArray{T, N}, NTuple{N, var\"#s2\"} where var\"#s2\"<:AbstractUnitRange}} where {N, T}","page":"Home","title":"TiledExtractor.crop_ranges_to_array","text":"crop_ranges_to_array(array, ranges)\n\nCrop the ranges (a Tuple of AbstractUnitRange) to the axes of array.\n\nThis uses intersect internally to crop the ranges.  \n\nReturns a Tuple of AbstractUnitRange, that have been  cropped to the axes of array.\n\n\n\n\n\n","category":"method"}]
}
