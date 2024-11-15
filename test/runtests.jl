using RangeExtractor
using Test

if !haskey(ENV, "RASTERDATASOURCES_PATH")
    ENV["RASTERDATASOURCES_PATH"] = mktempdir()
end

# This test script uses TestItems.jl,
# and TestItemRunner is able to locate all `@testitem` tests in the package.
# including those in the `src` directory if they existed..

# All of our tests here are in the `test` directory, so we can just run all of them.

using TestItemRunner

@run_package_tests